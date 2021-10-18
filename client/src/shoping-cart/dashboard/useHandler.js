import { useEffect, useState } from 'react';
import { ApiService, Endpoints } from '../../config/api';

const useHandler = (props) => {
  const [componentInfo, setComponentInfo] = useState({
    filterData: [],
    selectedProduct: '',
    products: []
  });
  useEffect(() => {
    ApiService.get(Endpoints.fetchAllProduct).then((res) => {
      setComponentInfo((prevState) => ({
        ...prevState,
        products: res.data,
        filterData: res.data
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
          products: res.data,
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
  return { onSearch, componentInfo, onSelect };
};

useHandler.propTypes = {};

export default useHandler;
