import PropTypes from 'prop-types';
import ProductPage from './ProductPage';

const DashBoard = (props) => {
  return (
    <div>
      <ProductPage {...props} />
    </div>
  );
};

DashBoard.propTypes = {};

export default DashBoard;
