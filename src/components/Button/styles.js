import styled from 'styled-components';

export const ButtonCP = styled.button`
  width: 100%;
  height: 2.75rem;
  text-align: center;
  background: var(--contrast-color);
  border-radius: .25rem;
  color: var(--white);
  font-weight: bold;
  border: none;
  border-bottom: .4rem solid #1C1C1C;
  font-size: .85rem;

  &:hover {
    filter: brightness(0.9);
    height: calc(2.75rem - .15rem);
    border-bottom: .25rem solid #1C1C1C;
  }
`;
