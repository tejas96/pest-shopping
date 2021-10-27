import React, { useState } from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

const Input = ({
  label = '',
  error = false,
  errorMessage = '',
  onChange = () => {},
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <MyInputWrapper>
        <MyInputLabel error>{label}</MyInputLabel>
      </MyInputWrapper>
      <MyInputWrapper>
        <MyInput
          error={error}
          onChange={onChange}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          {...props}
        />
        {type === 'password' && (
          <FeatherIcon
            className="styled-icon"
            icon={showPassword ? 'eye' : 'eye-off'}
            size={20}
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        )}
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
  position: relative;
  .styled-icon {
    position: absolute;
    right: 12px;
    top: 30%;
  }
`;
const MyInputLabel = styled.label`
  color: ${(props) =>
    props.error ? props.theme.danager : props.theme.textColor};
`;
export default Input;
