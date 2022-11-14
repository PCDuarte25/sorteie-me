import Router from 'next/router';
import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { FormContainer, StyledImage, Wrapper } from './styles';

export function CenterForm({ inputPlaceholder, actionLabel, isPinInput, onSubmit }) {
  const [value, setValue] = useState('');

  const formatInputValue = (val) => {
    if(isPinInput) {
      return val.toUpperCase().slice(0, 6);
    }

    return val.slice(0, 20);
  }

  const onChange = (ev) => {
    setValue(formatInputValue(ev.target.value))
  }

  const handleSubmit = (ev) => {
    onSubmit(ev, value);
  }

  return (
    <Wrapper>
      <StyledImage src={'/assets/sorteime-logo.svg'} alt="Trevo" height={64} width={200} />
      <FormContainer onSubmit={handleSubmit}>
        <Input placeholder={inputPlaceholder} isPinInput={!!isPinInput} value={value} onChange={onChange} />
        <Button type="submit">{actionLabel}</Button>
      </FormContainer>
    </Wrapper>
  )
}
