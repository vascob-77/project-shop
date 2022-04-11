import React from 'react';
import styled from "styled-components";
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "../context/StateProvider";

const Checkout = () => {

    const [{basket} ,dispatch] = useStateValue();

    return (
        <CheckoutSection>
            <div className="checkout-left">
                <div className="">
                    <h2 className="checkout-title">
                        Votre panier 😏
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                        />
                    )) }
                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </CheckoutSection>
    );
};

const CheckoutSection = styled.section`
  display: flex;
  padding: 20px;
  background: white;
  height: max-content;
  
  .checkout-title{
    margin-right: 10px;
    padding: 10px;
    border-bottom:1px solid lightgrey;
  }
  
  .checkout-left{
    display: flex;
    flex-direction: column;
  }
`

export default Checkout;