import styled from 'styled-components';
import Image from 'next/image';
import Button from '../Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;
`;

export const FormContainer = styled.form`
  background: var(--white);
  height: 8rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  border-radius: .25rem;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
  padding: 1rem;
`;

export const StyledImage = styled(Image)`
  width: 18rem;
`;
