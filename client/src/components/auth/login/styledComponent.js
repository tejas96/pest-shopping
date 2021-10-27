import styled from 'styled-components';

export const FContainer = styled.div`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: ${(props) =>
    props.border ? `1px solid ${props.color ? props.color : 'black'}` : 'none'};
  ${(props) => ({ ...props })}
`;

export const FIComponent = styled.div`
  margin: 20px 0;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  ${(props) => ({ ...props })}
  box-sizing: border-box;
  @media only screen and (max-width: 400px) {
    ${(props) => (props.breakpoint ? {} : {})}
  }
  ${(props) => ({ ...props })}
`;

export const H1 = styled.h1`
  background: linear-gradient(#4c5cfd, #101026);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
