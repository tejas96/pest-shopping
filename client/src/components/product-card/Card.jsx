import React from 'react';
import { Button, Text, Wrapper } from '../common';

const Card = ({
  price = 0.0,
  imgSrc = '',
  title = '...',
  category = '...',
  onCartClick=()=>{}
}) => {
  return (
    <Wrapper padding='5px' mh={20} mv={10} height={300} width={200}>
      <Wrapper>
          <img alt={title} src={imgSrc} width={200} height={200} />
      </Wrapper>
      <Wrapper className="card-title">
        <Text singleLine><span style={{opacity:0.5}}>product: </span>{title}</Text>
      </Wrapper>
      <Wrapper>
        <Text singleLine><span style={{opacity:0.5}}>category: </span>{category}</Text>
      </Wrapper>
       <Wrapper> <Text singleLine><span style={{opacity:0.5}}>price: </span>{price} $</Text></Wrapper>
      <Button onClick={onCartClick} text='Add Cart' fit icon="shopping-cart" mv={0} mh={0} background='#FFA41C'/>
    </Wrapper>
  );
};

Card.propTypes = {};

export default Card;

