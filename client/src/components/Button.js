import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ text = 'Button', style = {} }) => {
  return <StyledButton style={style}>{text}</StyledButton>;
};

Button.propTypes = {};

const StyledButton = styled.button`
  border: none;
  padding: 5px;
  box-sizing: border-box;
`;

export default Button;
