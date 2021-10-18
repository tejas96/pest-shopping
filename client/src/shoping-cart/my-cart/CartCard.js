import moment from 'moment';
import React from 'react';
const CartCard = ({
  image,
  title,
  totalAmount,
  timestamp,
  qty,
  onBuyClick = () => {},
  onDeleteClick = () => {},
  onChange = () => {},
  productId,
  cartId
}) => {
  return (
    <div
      style={{
        width: '80%',
        border: '1px solid',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
      <div style={{ width: '20%' }}>
        <img src={image} height={100} width={100} />
      </div>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
          <span>{title}</span>
        </div>
        <div>
          <button
            onClick={() => {
              onChange(productId, '+');
            }}>
            +
          </button>
          <span>Quentity : {qty}</span>
          <button
            disabled={qty === 1}
            onClick={() => {
              onChange(productId, '-');
            }}>
            -
          </button>
        </div>

        <div>
          <span>price : {totalAmount * qty}</span>
        </div>

        <div>
          <span>item adding date :{moment(timestamp).fromNow()}</span>
        </div>
        <div>
          <button onClick={onBuyClick}>Buy</button>
          <button onClick={() => onDeleteClick(productId)}>Delete</button>
          <button onClick={() => onChange(productId, 'save', cartId)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {};

export default CartCard;
