import React from 'react';
import styled from "styled-components";

const CheckoutProduct = () => {
    return (
        <CheckoutProductInfo>
            <img src="" alt="produit ajouté au panier" className="checkout-product"/>

            <div className="product-info">
                <p className="checkoutProduct-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur consequuntur fuga labore sunt, veritatis.</p>
                <p className="checkoutProduct-price">
                    <strong>10</strong>
                    <small>€</small>
                </p>
                <div className="checkoutProduct-rating">
                    ⭐⭐⭐⭐⭐
                </div>
                <button>Supprimer du panier</button>
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