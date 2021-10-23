import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ApiService, Endpoints } from '../../config/api';

const useProductPageContainer = ({ props = {} }) => {
  const userInfo = useSelector((state) => state.auth.user);
  const [componentInfo, setComponentInfo] = useState({
    filterData: [],
    selectedProduct: '',
    products: []
  });
  useEffect(() => {
    ApiService.get(Endpoints.fetchAllProduct).then((res) => {
      console.log(res);
      setComponentInfo((prevState) => ({
        ...prevState,
        products: res?.data,
        filterData: res?.data
      }));
    });
  }, []);

  /**
   *
   * @param {*} value
   * @returns
   */
  const onSearch = (value) => {
    if (!value) {
      ApiService.get(Endpoints.fetchAllProduct).then((res) => {
        setComponentInfo((prevState) => ({
          ...prevState,
          products: res?.data,
          filterData: []
        }));
      });
      return;
    }
    ApiService.post(Endpoints.fetchSearchProducts, { title: value }).then(
      (res) => {
        setComponentInfo((prevState) => ({
          ...prevState,
          filterData: res.data
        }));
      }
    );
  };

  /**
   *
   * @param {*} value
   */
  const onSelect = (value) => {
    ApiService.post(Endpoints.fetchSearchProducts, {
      title: value?.title
    }).then((res) => {
      setComponentInfo((prevState) => ({
        ...prevState,
        selectedProduct: value,
        filterData: [],
        products: res.data
      }));
    });
  };

  const handleCartItemAdd = (product) => {
    ApiService.post(Endpoints.addCartItem, {
      product_id: product?._id,
      user_id: userInfo?._id,
      qty: 1,
      totalAmount: product.price,
      timestamp: Date.now()
    })
      .then(() => {
        props?.history?.push(`/cart/${product._id}`);
      })
      .catch((err) => {
        setTimeout(() => {
          props?.history?.push(`/login`);
        }, 2000);
      });
  };
  return { onSearch, componentInfo, onSelect, handleCartItemAdd };
};

useProductPageContainer.propTypes = {};

export default useProductPageContainer;
