import Router from 'next/router';
import { toast } from 'react-toastify';
import { CenterForm } from '../../components/CenterForm';
import { Container } from '../../components/Container';
import { RoomService } from '../../services/backend/services/RoomService';


export default function Home() {

  const verifyRoom = async (roomId) => {
    const room = await RoomService(roomId).getRoom();

    return room.exists();
  }

  const onFormSubmit = async (ev, inputValue) => {
    ev.preventDefault();
    
    if(await verifyRoom(inputValue)) {
      Router.push(`/room/${inputValue}`);
    } else {
      toast.error('Ooops... A sala nÃ£o existe!');
    }
  }

  return (
    <Container>
      <CenterForm inputPlaceholder="PIN do Jogo" actionLabel="Inserir" isPinInput onSubmit={onFormSubmit} />
    </Container>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {}
  }
}