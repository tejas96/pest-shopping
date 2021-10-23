import styled from 'styled-components';

const Wrapper = ({
  mh = 0,
  mv = 0,
  height = 'auto',
  width = 'auto',
  align = 'left',
  ...props
}) => {
  return (
    <StyledWrapper
      align={align}
      mh={mh}
      mv={mv}
      height={height}
      width={width}
      {...props}
    />
  );
};

const StyledWrapper = styled.div`
  ${(props) => {
    return {
      height: props.height,
      width: props.width,
      margin: `${props.mv}px ${props.mh}px}`,
      textAlign: props.align
    };
  }}
  ${(props) => ({ ...props })}
`;
export default Wrapper;
