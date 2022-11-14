import { useState, useEffect } from 'react';
import { Container } from "../Container";
import { Title, Winner } from './styles';

function randomInt(max, min) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
}

export function FinishGame({ data }) {
  const [winner, setWinner] = useState([{}]);
  const [finalResult, setFinalResult] = useState([]);

  useEffect(() => {
    let result = [];

    const { participants } = data;

    const participantsResults = Object.entries(participants || {})
      .map(([, part]) => part.choosenNumbers?.map(Number))
      .filter(Boolean);

    while(true) {
      const randomNumber = randomInt(1, 11);
      if(!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
      if(result.length === 4) {
        if(participantsResults.some(playerResult => {
          return playerResult.includes(result[0])
            && playerResult.includes(result[1])
            && playerResult.includes(result[2])
            && playerResult.includes(result[3])
        })) {
          break;
        } else {
          result = [];
        }
      }
    }

    const newWinner = Object.entries(participants || {})
      .filter(([name, { choosenNumbers }]) => {
        choosenNumbers = choosenNumbers?.map(Number) || [];
        return choosenNumbers?.includes(result[0])
          && choosenNumbers?.includes(result[1])
          && choosenNumbers?.includes(result[2])
          && choosenNumbers?.includes(result[3])
      })
      .map(([name, part]) => ({ name, result: part.result }));

    setWinner(newWinner);
    setFinalResult(result);
  }, []);

  return (
    <Container style={{
      flexDirection: 'column'
    }}>
      <Title>Jogo finalizado: {finalResult.sort((max, min) => max - min).join(', ')}</Title>
      <Winner>Ganhador: {winner[0].name}</Winner>
    </Container>
  )
}
