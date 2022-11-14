import { onValue, ref } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import { database } from '../../services/backend';
import { PlayerService } from '../../services/backend/services/PlayerService';
import { Loading } from '../Loading';
import { Option } from '../Option';
import { ChoosenContainer, Container, Options, ResultOption, ResultsContainer, Title, Button, LoadingContainer, LoadingMessage, InfoMessage } from './styles';

export function Game({ optionsAmount = 10, roomCode }) {
  const initialOptions = new Array(optionsAmount).fill(false)
    .map((val, i) => ({
      val: `${i + 1}`.padStart(2, '0'),
      isSelected: false,
    }));

  const [options, setOptions] = useState(initialOptions);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isResponseSent, setIsResponseSent] = useState(false);

  const playerService = PlayerService(roomCode, localStorage.getItem('playerName'));

  const handleButtonClick = (val) => {
    const newOptions = [...options];
    const indexToChange = newOptions.findIndex((opt) => opt.val === val);

    if(newOptions.filter((obj) => obj.isSelected).length < 4) {
      newOptions[indexToChange] = {...newOptions[indexToChange], isSelected: !newOptions[indexToChange].isSelected};
    } else {
      newOptions[indexToChange] = {...newOptions[indexToChange], isSelected: false}
    }

    setSelectedOptions(newOptions.filter((obj) => obj.isSelected).map(obj => obj.val));
    setOptions(newOptions);
  }

  useEffect(() => {
    const dbref = ref(database, '/participants');

    onValue(dbref, console.log);
  }, []);

  const handleSubmit = () => {
    if(selectedOptions.length !== 4) {
      return;
    }

    playerService.chooseNumbers(selectedOptions);

    setIsResponseSent(true);
  }

  if(isResponseSent) {
    return (
      <LoadingContainer>
        <Loading />
        <LoadingMessage isBold>
          Seu palpite foi enviado, agora cruze os dedos
        </LoadingMessage>
        <LoadingMessage>
          Aguardando host finalizar o jogo...
          <br />
          <InfoMessage>A resposta aparecerá na tela do host quando a sala for finalizada</InfoMessage>
        </LoadingMessage>
      </LoadingContainer>
    )
  }

  return (
    <Container>
      <Title>Escolha 4 números distintos</Title>
      <Options>
        {
          options.map(opt => <Option handleClick={() => handleButtonClick(opt.val)} isSelected={opt.isSelected} value={opt.val} key={opt.val} />)
        }
      </Options>
      <ChoosenContainer>
        <ResultsContainer>
          {
            (new Array(4)).fill(false).map((_, i) => (
              <ResultOption key={selectedOptions[i]} isData={!!selectedOptions[i]}>
                {selectedOptions[i]}
              </ResultOption>)
            )
          }
        </ResultsContainer>
        <Button type="button" disabled={selectedOptions.length !== 4} onClick={handleSubmit}>OK!</Button>
      </ChoosenContainer>
    </Container>
  );
}
