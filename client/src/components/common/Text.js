import styled from 'styled-components';

const Text = ({
  color,
  text = '',
  opacity = 1,
  singleLine = false,
  ...props
}) => {
  return (
    <StyledText
      color={color}
      opacity={opacity}
      singleLine={singleLine}
      {...props}>
      {text}
      {props.children}
    </StyledText>
  );
};

const StyledText = styled.span`
  display: block;
  opacity: ${(props) => props.opacity};
  color: ${(props) => (props.color ? props.color : props.theme.textColor)};
  ${(props) =>
    props.singleLine
      ? {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      : {}}
`;
export default Text;
