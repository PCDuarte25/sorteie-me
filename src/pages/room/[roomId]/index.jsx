import Router from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { CenterForm } from '../../../components/CenterForm';
import { Container } from '../../../components/Container';
import { RoomService } from '../../../services/backend/services/RoomService';

export default function Home({ roomId }) {
  const roomService = RoomService(roomId);
  const playerExists = async (playerName) => {
    const room = await roomService.getRoom();

    return !!room.val()?.participants?.[playerName];
  }
  
  const onFormSubmit = async (ev, inputValue) => {
    ev.preventDefault();

    if(!inputValue.trim().length) {
      toast.error('O nome não pode estar vazio!');
    } else {
      const nameUnvailable = await playerExists(inputValue);

      if(!nameUnvailable) {
        roomService.addParticipant({ name: inputValue });

        localStorage.setItem('playerName', inputValue);

        Router.push(`/room/${roomId}/play`);
      } else {
        toast.error('O nome já está em uso');
      }
    }
  }

  return (
    <Container>
      <CenterForm inputPlaceholder="Apelido" actionLabel="Ok, boa sorte!" onSubmit={onFormSubmit} />
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      roomId: ctx.params.roomId
    }
  }
}
