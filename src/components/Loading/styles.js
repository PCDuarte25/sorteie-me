import styled from 'styled-components';

import { keyframes } from 'styled-components';

const raise = keyframes`
  0% {
    height: 0;
    width: 0;
  }


  50% {
    height: 1.25rem;
    width: 1.25rem;
  }

  100% {
    height: 0;
    width: 0;
  }

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
`;

export const Clover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  transform: rotate(-30deg);
  & > div {
    background-image: url(/assets/white-clover.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:nth-child(1) {
    & > div {
      animation: ${raise} 1.5s ease-in infinite .5s;
    }
  }

  &:nth-child(2) {
    & > div {
      animation: ${raise} 1.5s ease-in infinite .75s;
    }
  }

  &:nth-child(3) {
    & > div {
      animation: ${raise} 1.5s ease-in infinite 1s;
    }
  }
`;
