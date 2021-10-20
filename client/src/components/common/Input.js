import React, { useState } from 'react';
import styled from 'styled-components';

const xyz = 'black';
const Input = ({
  label = '',
  error = false,
  errorMessage = '',
  onChange = () => {},
  ...props
}) => {
  return (
    <>
      <MyInputWrapper>
        <MyInputLabel error>{label}</MyInputLabel>
      </MyInputWrapper>
      <MyInputWrapper>
        <MyInput error={error} onChange={onChange} {...props} />
      </MyInputWrapper>
      {error ? (
        <MyInputWrapper>
          <MyInputLabel error>{errorMessage}</MyInputLabel>
        </MyInputWrapper>
      ) : null}
    </>
  );
};

const MyInput = styled.input`
  width: ${(props) => (props.width ? props.width : '300px')};
  padding: ${(props) => props.theme.size.md};
  color: ${(props) => props.theme.textColor};
  outline: ${(props) =>
    props.error ? props.theme.danager : props.theme.secondry};
  border-radius: ${(props) => props.theme.size.sm / 2};
  border: ${(props) =>
    `1px solid ${props.error ? props.theme.danager : props.theme.secondry}`};
  background: 'none';
  box-sizing: border-box;
  ${(props) => ({ ...props })}
`;
const MyInputWrapper = styled.div`
  margin: 10px 5px;
`;
const MyInputLabel = styled.label`
  color: ${(props) =>
    props.error ? props.theme.danager : props.theme.textColor};
`;
export default Input;
