import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

function Loader({ show = false, ...props }) {
  return (
    <>
      {show && (
        <LoaderWrapper show={show}>
          <ReactLoading
            type={'bubbles'}
            color={'red'}
            height={100}
            width={100}
          />
        </LoaderWrapper>
      )}
    </>
  );
}

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(40, 49, 121, 0.3);
  overflow: hidden;
`;
export default Loader;
