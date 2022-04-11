import React from 'react';
import styled from "styled-components";
import {useStateValue} from "../context/StateProvider";

const CheckoutProduct = ({id,image,title,price}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id
        })
    }

    return (
        <CheckoutProductInfo>
            <img src={image} alt="produit ajouté au panier" className="checkout-product"/>

            <div className="product-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>
                <div className="checkoutProduct-rating">
                    ⭐⭐⭐⭐⭐
                </div>
                <button onClick={removeFromBasket}>Supprimer du panier</button>
            </div>
        </CheckoutProductInfo>
    );
};

const CheckoutProductInfo = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  
  .checkoutProduct-info{
    padding-left: 20px;
  }
  
  button{
    background:#FFCE2E;
    margin-top: 10px;
    color:#111;
    border-radius: 4px;
    border: none;
  }
  
  img{
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
  
  .checkoutProduct-rating{
    display: flex;
  }
  
  .checkoutProduct-title{
    font-size: 17px;
    font-weight: 800;
  }
`

export default CheckoutProduct;