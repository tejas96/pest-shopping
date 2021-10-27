import React from 'react';
import styled from 'styled-components';

function Footer(props) {
  return (
    <FooterWrapper>
      <FooterHeading>HUB</FooterHeading>
      <FooterCotent></FooterCotent>
      <FooterCotent />
      <FooterCotent />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const FooterHeading = styled.h1`
  color: white;
  align-self: flex-start;
  align-items: flex-start;
  width: 100%;
  border: 1px solid red;
`;

const FooterCotent = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-evenly;
  .Content {
    color: red;
  }
`;
export default Footer;
