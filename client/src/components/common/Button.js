import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

const Button = ({
  text = 'Button',
  onClick = () => {},
  icon = '',
  background,
  width = 'auto',
  height = 'auto',
  mv = 10,
  mh = 5,
  round = 0,
  ...props
}) => {
  return (
    <MyButton
      background={background}
      onClick={onClick}
      width={width}
      height={height}
      mv={mv}
      mh={mh}
      round={round}
      {...props}>
      {text}
      {icon && <FeatherIcon className="styled-icon" icon={icon} size={20} />}
    </MyButton>
  );
};

const MyButton = styled.button`
  ${(props) => ({ ...props })}
  text-align: center;
  ${(props) => ({
    width: props.fit ? '100%' : props.width,
    height: props.height,
    background: props.background ? props.background : props.theme.primary,
    color: props.theme.color.white,
    borderRadius: props.round ? `${props.round}px` : props.theme.size.sm / 2,
    margin: `${props.mv}px ${props.mh}px`
  })}
  font-size: ${(props) => props.theme.size.lg};
  border: none;
  padding: ${(props) => props.theme.size.xs};
  box-sizing: border-box;
  cursor: pointer;
  .styled-icon {
    ${(props) =>
      props.icon
        ? {
            verticalAlign: 'middle',
            marginLeft: '5px'
          }
        : {}}
  }
  &:disabled {
    background-color: rgba(200, 200, 200, 0.5);
    cursor: not-allowed;
    color: gray;
  }
`;

export default Button;
