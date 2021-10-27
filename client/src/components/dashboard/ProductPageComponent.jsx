import { FlexWrapper, Loader, Wrapper } from 'components/common';
import Footer from 'components/common/Footer';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../common';
import Card from '../product-card/Card.jsx';
import useProductPageContainer from './productPageContainer';

const ProductPage = (props) => {
  
  const { onSearch, componentInfo, onSelect, handleCartItemAdd} = useProductPageContainer({props});
  return (
    <Wrapper>
      <Loader show={componentInfo.loader}/>
      <ToastContainer />
      <Header
        title="Hub"
        onSelect={onSelect}
        onSearch={onSearch}
        data={componentInfo.filterData}
      />
      <FlexWrapper justify-content='space-evenly' z-index={-1}>
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
      </FlexWrapper>
      <Footer/>
    </Wrapper>
  );
};

ProductPage.propTypes = {};

export default ProductPage;
