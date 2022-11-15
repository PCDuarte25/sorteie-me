import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { Container } from '../../../../components/Container';
import { Game } from '../../../../components/Game';
import { Waiting } from '../../../../components/Waiting';

function Play() {
  const router = useRouter();
  const { roomId } = router.query;

  const isGameStarted = true;

  return (
    <Container>
      {isGameStarted ? <Game roomCode={roomId} /> : <Waiting />}
    </Container>
  );
}

export default dynamic(() => Promise.resolve(Play), {
  ssr: false,
});
