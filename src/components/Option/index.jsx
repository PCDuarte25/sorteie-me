import React, { useState } from 'react';
import { OptionCP } from './styles';

export function Option({ handleClick, value, isSelected, ...rest }) {
  return (
    <OptionCP onClick={handleClick} isSelected={isSelected} {...rest}>
      {value}
    </OptionCP>
  )
}
