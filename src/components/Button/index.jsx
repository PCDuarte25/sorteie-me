import React from 'react';
import { ButtonCP } from './styles';

export function Button({ children, ...rest }) {
  return (
    <ButtonCP {...rest}>{children}</ButtonCP>
  )
}
