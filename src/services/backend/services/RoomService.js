import { database } from "..";
import { ref, set, update, get } from 'firebase/database';

export function RoomService(code) {
  return {
    code,
    createRoom: ({
      name,
      description,
      totalNumbers,
      totalChoosen,
      maxParticipants,
      host_id,
    }) => {
      return set(ref(database, "rooms/" + code), {
        name,
        description,
        totalNumbers,
        totalChoosen,
        maxParticipants,
        createdAt: Date.now(),
        host_id,
        participants: [],
        isGameStarted: false,
        isGameFinished: false,
      });
    },
    addParticipant: (participant) => {
      return update(ref(database, "rooms/" + code + "/participants"), {
        [participant.name]: {
          createdAt: Date.now(),
          choosenNumbers: [],
          isFinished: false,
        }
      });
    },
    startGame: () => {
      return update(ref(database, "rooms/" + code), {
        isGameStarted: true,
      });
    },
    finishGame: () => {
      return update(ref(database, "rooms/" + code), {
        isGameFinished: true,
      });
    },
    getRoom: () => {
      return get(ref(database, "rooms/" + code));
    },
  }
}
