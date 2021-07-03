import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styles';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isErroed={!!error}>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error}
    </Container>
  );
};

export default Input;