import styled from 'styled-components';

export const RoomName = styled.h2`
  font-size: 2.4rem;
  color: #FFF;
`;

export const RoomDescription = styled.p`
  font-size: 1.4rem;
  color: #FFF;
  margin-top: .5rem;
`;

export const Players = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
  color: #FFF;
`;

export const Player = styled.span`
  font-size: 1.4rem;
  color: ${({ isFinished }) => isFinished ? '#FFF' : '#DCDCDC'};
  height: 2rem;
  padding: 0 1rem;
  font-weight: 700;
`;

export const SeeResult = styled.button`
  font-size: 1rem;
  font-weight: 600;
  height: 3.2rem;
  padding: 0 3rem;
  background: #FFF;
  border-radius: .25rem;
  color: var(--primary-color);
  border: none;
  margin-top: 3rem;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, .15);
`;
