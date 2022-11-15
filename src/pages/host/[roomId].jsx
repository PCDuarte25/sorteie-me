import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FinishGame } from '../../components/FinishGame';
import { Host } from '../../components/Host';
import { RoomService } from '../../services/backend/services/RoomService';

export default function X() {
  const { query: { roomId } } = useRouter();

  const service = RoomService(roomId);

  const [data, setData] = useState({
    participants: [],
  });

  service
    .getRoom()
    .then((snap) => setData(snap.val()));

  if(data?.isGameFinished) {
    return (
      <FinishGame data={data} />
    );
  }

  const participantsEntries = Object.entries(data?.participants || {});

  return (
    <Host
      participants={participantsEntries}
    />
  );
}
