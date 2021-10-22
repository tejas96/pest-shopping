import { useEffect, useSelector, useState } from 'react';
import { ApiService, Endpoints } from 'config/api';

const useMyCartContainer = ({ props = {} }) => {
  const userInfo = useSelector((state) => state.auth.user);
  const [cartUpdateInfo, setCartUpdateInfo] = useState({
    qty: 0,
    userCartItems: new Map()
  });
  useEffect(() => {
    ApiService.get(Endpoints.fetchCart, { id: userInfo?._id })
      .then((result) => {
        const cartItems = new Map();
        result?.data?.map((item) => cartItems.set(item.product_id, item));
        return cartItems;
      })
      .then((cartItems) => {
        if (cartItems?.size) {
          ApiService.post(Endpoints.fetchSearchProducts, {
            ids: Array.from(cartItems.keys())
          }).then((result) => {
            result?.data?.map((item) => {
              let cartItem = cartItems.get(item._id);
              cartItems.set(item._id, {
                ...item,
                ...cartItem,
                productId: item._id
              });
            });
            setCartUpdateInfo((prevState) => ({
              ...prevState,
              userCartItems: cartItems
            }));
          });
        }
      });
  }, []);

  const handleDelete = (id) => {
    let cartItem = cartUpdateInfo.userCartItems.get(id);
    let clone = new Map(cartUpdateInfo.userCartItems.entries());
    clone.delete(id);
    ApiService.deleteApi(Endpoints.deleteCartItem, {
      id: cartItem._id
    }).then((result) => {
      console.log(result);
    });
    setCartUpdateInfo((prevState) => ({
      ...prevState,
      userCartItems: clone
    }));
  };

  const handleOnChange = (id, operation, cartId) => {
    let clone = new Map(cartUpdateInfo.userCartItems.entries());
    let cartItem = clone.get(id);
    if (operation === '+') {
      cartItem.qty += 1;
    } else if (operation === '-') {
      cartItem.qty -= 1;
    } else if (operation === 'save') {
      ApiService.put(Endpoints.updateCartItem, {
        _id: cartId,
        product_id: id,
        user_id: userInfo?._id,
        qty: cartItem.qty,
        totalAmount: cartItem.totalAmount,
        timestamp: Date.now()
      }).then((result) => {
        console.log(result);
      });
    }
    clone.set(id, cartItem);
    setCartUpdateInfo((prevState) => ({
      ...prevState,
      userCartItems: clone
    }));
  };

  return {
    handleOnChange,
    handleDelete,
    cartUpdateInfo
  };
};

export default useMyCartContainer;
