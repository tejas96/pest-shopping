import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import './style.css';
const Card = ({
  price = 0.0,
  imgSrc = '',
  title = '...',
  category = '...',
  onCartClick=()=>{}
}) => {
  return (
    <div className="card">
      <div className="img-container">
        <div className="img">
          <img src={imgSrc} height={230} width={200} />
          <div className="img-cart-logo">
            <FeatherIcon
              icon="shopping-cart"
              style={{
                color: 'tomato'
              }}
              onClick={onCartClick}
            />
          </div>
        </div>
      </div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div>{category}</div>
      <div>{price}</div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
