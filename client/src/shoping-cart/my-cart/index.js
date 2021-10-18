import React from 'react';
import PropTypes from 'prop-types';
import MyCart from './MyCart';

const index = (props) => {
  return (
    <div>
      <MyCart {...props} />
    </div>
  );
};

index.propTypes = {};

export default index;
