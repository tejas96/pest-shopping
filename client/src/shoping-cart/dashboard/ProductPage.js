import React from 'react';
import { useSelector } from 'react-redux';
import { logout } from '../../common/utilityMethods';
import { Header } from '../../components';
import { ApiService, Endpoints } from '../../config/api';
import Card from './Card.jsx';
import useHandler from './useHandler';

const ProductPage = (props) => {
  const userInfo = useSelector((state) => state.auth.user);
  const { onSearch, componentInfo, onSelect } = useHandler();
  const handleCartItemAdd = (product) => {
    ApiService.post(Endpoints.addCartItem, {
      product_id: product._id,
      user_id: userInfo._id,
      qty: 1,
      totalAmount: product.price,
      timestamp: Date.now()
    }).then(() => {
      props.history.push(`/cart/${product._id}`);
    });
  };
  return (
    <div>
      <Header
        title="Hub"
        onSelect={onSelect}
        onSearch={onSearch}
        data={componentInfo.filterData}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          zIndex: -1
        }}>
        {componentInfo?.products?.map((item) => {
          return (
            <Card
              key={item._id}
              onCartClick={() => {
                handleCartItemAdd(item);
              }}
              {...item}
              imgSrc={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

ProductPage.propTypes = {};

export default ProductPage;
