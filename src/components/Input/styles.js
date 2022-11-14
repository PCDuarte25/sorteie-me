import styled from 'styled-components';

export const InputCP = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: 2px solid var(--gray);
  height: 2.75rem;
  border-radius: .25rem;
  padding: .5rem;
  font-weight: bold;
  text-align: center;

  &::placeholder {
    color: var(--gray);
  }

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;
