import styled from 'styled-components';

export const OptionCP = styled.button`
  width: 10vw;
  max-width: 4rem;
  height: 10vw;
  max-height: 4rem;
  color: ${({ isSelected }) => isSelected ? "var(--white)" : "var(--contrast-color)"};
  background: ${({ isSelected }) => isSelected ? "var(--primary-color)" : "var(--white)"};
  border: none;
  border-bottom: ${({ isSelected }) => isSelected ? 'none' : "2px solid var(--gray)"};
  box-shadow: ${({ isSelected }) => isSelected ? 'inset 0px 0px 2px 2px rgba(0, 0, 0, .2)' : '0px 1px 1px 1px rgba(0, 0, 0, .1)'} ;
  font-weight: bold;
  font-size: .9rem;
  cursor: pointer;
  transition: border .1s ease-out;
`;
