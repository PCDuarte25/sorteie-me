import React from 'react';
import { Container, Footer } from './styles';

export function Waiting() {
  const playerName = localStorage.getItem('playerName');

  return (
    <>
      <Container>
        <h2>Você entrou!</h2>
        <p>Aguarde o host iniciar o jogo!</p>
      </Container>
      <Footer>{playerName}</Footer>
    </>
  )
}
