import { FlexWrapper } from 'components/common';
import styled from 'styled-components';

export const SignupWrapper = styled(FlexWrapper)`
  flex: 1;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
export const H1 = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.secondry};
`;
