import { RoomService } from "../../services/backend/services/RoomService";
import { Container } from "../Container";
import { Player, Players, RoomDescription, RoomName, SeeResult } from "./styles";

const service = RoomService('123456');

export function Host({ name, description, participants }) {
  const handleShowResult = () => {
    service.finishGame();
  }

  return (
    <Container
      style={{
        flexDirection: 'column',
      }}
    >
      <RoomName>{name}</RoomName>
      <RoomDescription>{description}</RoomDescription>
      <Players>
        {
          participants.length > 0
            ? participants.map(([name, participant]) => (
              <Player
                key={name}
                isFinished={participant.isFinished}
              >
                {name}
              </Player>
            ))
            : <RoomDescription>Nenhum participante ingressou na sala</RoomDescription>
        }
      </Players>
      <SeeResult onClick={handleShowResult}>
        Mostrar resultado
      </SeeResult>
    </Container>
  )
}
