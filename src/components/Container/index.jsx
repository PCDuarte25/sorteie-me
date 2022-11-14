import React from 'react';
import { Circle, Clover, ContainerCP } from './styles';

export function Container({ children, ...rest }) {
  return (
    <ContainerCP {...rest}>
      <Clover />
      {children}
      <Circle />
    </ContainerCP>
  );
}