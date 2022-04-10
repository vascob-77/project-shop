import React from 'react';
import styled from "styled-components";
import { useStateValue } from './../context/StateProvider'

const Product = ({id,title,price,rating,image}) => {

    const [state,dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,
                image,
                price,
                rating
            }
        })
    };

    return (
        <ProductInfo>
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                   <strong>{price}</strong>
                   <small>€</small>
                </p>
                <div className="product-rating">
                        <p>⭐</p>
                </div>
            </div>

            <img src={image} alt="Image produit" height={200}/>

            <div className="btn">
                <button onClick={addToBasket}>Ajouter au panier</button>
            </div>
        </ProductInfo>
    );
};

const ProductInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background: white;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .btn{
    transform: translateX(40px);
  }
  
  & > img{
    max-width: 200px;
    width: 100%;
    object-fit: contain;
    margin: 20px 0 0 15px;
  }
  
  button{
    background:#FFCE2E;
    margin-top: 10px;
    width: 60%;
    color:#111;
    border-radius: 4px;
    border: none;
  }
  
  .product-price{
    margin-top: 5px;
  }
  
  .product-info{
    height: 100px;
    margin-bottom: 15px;
  }
  
`

export default Product;