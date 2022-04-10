//Librairies
import React from 'react';
import styled from "styled-components";
import {FiShoppingCart} from "react-icons/fi";
import {BiSearchAlt} from "react-icons/bi";
import {Link} from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
//Image
import logoShop from "../asset/images/logo.png";


const Header = () => {

    const [{basket}, dispatch] = useStateValue()

    return (
            <SectionHeader>
                <Link to="/" style={{textDecoration:'none'}}>
                    <div className="header-logo">
                        <img src={logoShop} width="120"/>
                    </div>
                </Link>
                <div className="header-search">
                    <input type="text" className="input-search"></input>
                    <BiSearchAlt className="header-logoSearch"/>
                </div>

                <div className="header-nav">
                    <div className="nav-item">
                        <span className="item-one">Hello Guest</span>
                        <span className="item-two">Sign In</span>
                    </div>
                    <div className="nav-item">
                        <span className="item-one">Your</span>
                        <span className="item-two">Shop</span>
                    </div>

                    <Link to="checkout" style={{textDecoration:'none'}}>
                        <div className="item-basket">
                            <FiShoppingCart size={35}/>
                            <span className="item-basket basketCount">{basket.length}</span>
                        </div>
                    </Link>

                </div>
            </SectionHeader>
    );
};

const SectionHeader = styled.section`
  height: 130px;
  display: flex;
  align-items: center;
  position: sticky;
  top:0;
  z-index: 100;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: white;
  .header-logo{
    display: flex;
    align-items: center;
    margin: 0 25px;
  }
  
  .header-search{
    display: flex;
    flex:1;
    align-items: center;
    border-radius:24px;
    margin:0 10px;
  }
  
  .input-search{
    height: 12px;
    width: 100%;
    padding:8px;
    border-radius: 1px;
  }
  
  .header-nav{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
  
  .nav-item{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 700;
  }
  
  .item-basket{
    display: flex;
    align-items: center;
    color:white;
    margin-right: 50px;
    margin-left: 10px;
  }
  
  .header-logoSearch{
    padding:5px;
    height: 22px !important;
    background-color: #FFCE2E;
    border-radius: 4px;
  }
  
  .header-nav{
    display: flex;
    justify-content: space-evenly;
  }
  
  .item-one{
    font-size: 12px;
  }
  
  .item-two{
    font-size: 14px;
    font-weight: 800;
  }
  
  .item-basket{
    display: flex;
    color:black;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    margin-left: 10px;
  }
  
  .basket-count{
    margin-left: 10px;
    margin-right: 10px;
  }
`

export default Header;