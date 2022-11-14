import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
  text-align: center;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 2.5rem;
  color: var(--shadow-color);
  background: var(--white);
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-weight: bold;
`;
