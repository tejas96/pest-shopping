import { Loader } from 'components/common';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ApiService, Endpoints } from '../../config/api';
import CartCard from "./CartCardComponent";
const MyCart = props => {
    const userInfo = useSelector(state=>state.auth.user);
    const [userCartItems, setUserCartItems] = useState(new Map());
    const [loader, setLoader] = useState(false);
    const [cartUpdateInfo] = useState({
        qty:0
    })

    useEffect(()=>{
        setLoader(()=>true);
        ApiService.get(Endpoints.fetchCart, {id:userInfo?._id}).then(result=>{    
        const cartItems = new Map();
        result?.data?.map((item)=>cartItems.set(item.product_id, item))
        return cartItems;
        }).then((cartItems)=>{
            if(cartItems?.size){
                ApiService.post(Endpoints.fetchSearchProducts, {ids:Array.from(cartItems.keys())}).then(result=>{
                    result?.data?.map(item=>{
                     let cartItem = cartItems.get(item._id);
                     cartItems.set(item._id, { ...item,...cartItem, productId: item._id});
                    })
                    setUserCartItems(()=>cartItems);
                 })
            }
        }).finally(()=>{
            setLoader(()=>false);
        })
    },[]);
    const handleBuyClick = ()=>{
        alert('feature not implmented yet')
    }
    const handleDelete = (id)=>{
        let cartItem = userCartItems.get(id)
        let clone = new Map(userCartItems.entries());
        clone.delete(id);
        ApiService.deleteApi(Endpoints.deleteCartItem, {id:cartItem._id}).then(result=>{
            console.log(result);
        })
        setUserCartItems(clone);
    }
    const handleOnChange = (id, operation, cartId)=>{
        let clone = new Map(userCartItems.entries());
        let cartItem = clone.get(id);
        if(operation === '+'){
            cartItem.qty+=1;
        }else if(operation === "-"){
            cartItem.qty-=1;
        }
        else if(operation === 'save'){
            ApiService.put(Endpoints.updateCartItem, {  
                _id : cartId,
                product_id:id,
                user_id:userInfo?._id,
                qty:cartItem.qty,
                totalAmount:cartItem.totalAmount,
                timestamp:Date.now()}).then(result=>{
                    console.log(result);
                })
        }
        clone.set(id, cartItem);
        setUserCartItems(()=>clone);
    }
    return (
        <div>
            <Loader show={loader}/>
            {
                Array.from(userCartItems?.values())?.map(item=>{
                   return <CartCard onBuyClick={handleBuyClick} updateInfo={cartUpdateInfo} onChange={handleOnChange} onDeleteClick={handleDelete} cartId={item._id} {...item}/>
                })
            }
        </div>
    );
};

MyCart.propTypes = {
    
};

export default MyCart;