import styled from 'styled-components';
import { keyframes } from 'styled-components';

const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 80vw;
  max-width: 30rem;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: .5rem;
  padding: 2rem;
  gap: 2rem;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h3`
  color: var(--contrast-color);
`;

export const Options = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const ChoosenContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const ResultOption = styled.div`
  border: 2px solid ${({isData}) => isData ? 'var(--primary-color)' : 'var(--gray)'};
  height: 10vw;
  width: 10vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-weight: bold;

  animation: ${appearAnimation} 1.5s ease-out;
`;

export const Button = styled.button`
  background: var(--secondary-color);
  height: 10vw;
  width: 10vw;
  border: none;
  color: var(--white);
  font-weight: bold;
  border-radius: 50%;

  &:disabled {
    background: var(--gray);
    cursor: not-allowed;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  max-width: 30rem;
  gap: .5rem;
  z-index: 999;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  color: var(--white);
  font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'};
  font-size: 1.2rem;
`;

export const InfoMessage = styled.p`
  width: 100vw;
  position: absolute;
  bottom: 2rem;
  left: 0;
  font-size: .8rem;
  color: #FFF;
  margin-top: .5rem;
  font-weight: bold;
`;
