import React from 'react';
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue()
    console.log(basket.length)
    return (

        <SubTotal>
            <CurrencyFormat
                renderText={(value) => (

                    <>
                        <p>
                            Sous-total ({basket.length} {basket.length > 1 ? 'articles' : 'article'}) <strong>{value}€</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" /> Ceci est un cadeau ?
                        </small>
                            <button>Procéder a l'achat</button>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
            />
        </SubTotal>
    );
};


const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding:20px;
  background: #f3f3f3;
  border:1px solid #dddddd;
  border-radius:3px;
  .subtotal-gift{
    display: flex;
    align-items: center;
  }
  
  .subtotal-gift > input{
    margin-right: 5px;
  }
  
  button{
    background:#FFCE2E;
   border-radius: 4px;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    border: none;
  }
`

export default Subtotal;