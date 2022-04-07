//Librairies
import React from 'react';
import {FiShoppingCart} from "react-icons/fi";
import {BiSearchAlt} from "react-icons/bi";

//Image
import logoShop from "../asset/images/logo.png";


const Header = () => {
    return (
            <div className="header">
                <div className="header_logo">
                    <img src={logoShop} />
                </div>

                <div className="header_search">
                    <input type="text" className="input-search"></input>
                    <BiSearchAlt/>
                </div>

                <div className="header_nav">
                    <div className="nav-item">
                        <span className="item-name">Hello Guest</span>
                        <span className="item-sign">Sign In</span>
                    </div>
                    <div className="nav-item">
                        <span className="item-your">Your</span>
                        <span className="item-shop">Shop</span>
                    </div>
                    <div className="nav-item">
                        <FiShoppingCart size={35}/>
                        <span className="item-cart">0</span>
                    </div>

                </div>
            </div>
    );
};

export default Header;