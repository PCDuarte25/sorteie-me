import styled from 'styled-components';

export const ContainerCP = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  position: relative;
  overflow: hidden;
`;

export const Clover = styled.div`
  background-image: url(/assets/clover.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  height: 25rem;
  width: 25rem;
  left: -5rem;
  top: -5rem;
  transform: rotate(90deg);
`;

export const Circle = styled.div`
  position: absolute;
  bottom: -10rem;
  right: -15rem;
  height: 30rem;
  width: 30rem;
  border-radius: 50%;
  background: var(--secondary-color);
`;

