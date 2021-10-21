import styled from 'styled-components';

const FlexWrapper = (props) => {
  return <StyledFlexWrapper {...props} />;
};

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) => ({ ...props })}
`;
export default FlexWrapper;
