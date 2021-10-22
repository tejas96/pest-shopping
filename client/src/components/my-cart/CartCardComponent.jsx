import moment from 'moment';
import React, { useEffect } from 'react';
import { Container } from './styledComponent';
import { Wrapper, Text, Button } from 'components/common';
const CartCard = ({
  image,
  title,
  totalAmount,
  timestamp,
  qty,
  onDeleteClick = () => {},
  onChange = () => {},
  productId,
  cartId
}) => {
  useEffect(() => {
    if (qty < 1) onDeleteClick(productId);
  }, [qty]);
  return (
    <Container>
      <Wrapper>
        <img alt={title} src={image} height={100} width={100} />
      </Wrapper>
      <Wrapper width="50%">
        <Wrapper mv={3}>
          <strong>
            <Text color="#527185" text={title} singleLine />
          </strong>
        </Wrapper>
        <Wrapper mv={3}>
          <Text>{totalAmount * qty} $</Text>
        </Wrapper>
        <Wrapper mv={3}>
          <Text>item added {moment(timestamp).fromNow()}</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper align="center">
        <Wrapper align="center" mv={5}>
          <Button
            fit
            round={10}
            background="orange"
            text="Checkout"
            onClick={() => alert('feature not implimented yet')}
          />
        </Wrapper>
        <Wrapper mv={5} align="center">
          <Button
            background="lightblue"
            round={50}
            text="+"
            onClick={() => {
              onChange(productId, '+');
            }}
          />
          <span>Quantity : {qty}</span>
          <Button
            round={50}
            background="lightblue"
            text="-"
            onClick={() => {
              onChange(productId, '-');
            }}
          />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

CartCard.propTypes = {};

export default CartCard;
