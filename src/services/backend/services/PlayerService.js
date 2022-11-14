import { database } from "..";
import { ref, update } from 'firebase/database';

export function PlayerService(roomCode, participantName) {
  return {
    chooseNumbers: (numbers) => {
      return update(ref(database, "rooms/" + roomCode + '/participants/' + participantName), {
        choosenNumbers: numbers,
        isFinished: true,
      });
    },
  }
}
 