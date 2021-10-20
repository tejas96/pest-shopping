import styled from 'styled-components';

const Button = ({ text = 'Button', onClick = () => {}, ...props }) => {
  return (
    <MyButton onClick={onClick} {...props}>
      {text}
    </MyButton>
  );
};

const MyButton = styled.button`
  text-align: center;
  font-size: ${(props) => props.theme.size.md};
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.color.white};
  border: none;
  border-radius: ${(props) => props.theme.size.sm / 2};
  padding: ${(props) => props.theme.size.xs};
  margin: 10px 5px;
  box-sizing: border-box;
  cursor: pointer;
  ${(props) => ({ ...props })}
`;

export default Button;
