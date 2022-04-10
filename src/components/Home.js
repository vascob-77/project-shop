import React from 'react';
import Product from "./Product";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    return (
            <SectionHome>
                <div className="home-container">
                    <div className="home-row">
                        <Product id={uuidv4()}title="Cette haltère est malgique 😍" price={29.99} rating={5} image="http://assets.stickpng.com/images/5a5e10a99fc8c9351ecc499c.png" />
                        <Product title="Haltère qui te fait gagner en rapidité" price={39.99} rating={5} image="https://cdn.tectake.fr/media/catalog/product/cache/1/small_image/1000x/0dc2d03fe217f8c83829496872af24a0/4/0/402586-2.jpg"/>
                        <Product title="Haltère qui te fait gagner en agilité" price={19.99} rating={5} image="https://cdn1.sveltus.com/2992-superlarge_default/haltere-hexagonale-10-kg-x1.jpg"/>
                    </div>
                    <div className="home-row">
                        <Product title="TOUT JavaScript" price={24.99} rating={5} image="https://static.fnac-static.com/multimedia/Images/FR/NR/0d/4a/99/10045965/1507-1/tsp20181225081034/Tout-Javascript.jpg"/>
                        <Product title="JavaScript pour les forts" price={21.49} rating={5} image="https://images.epagine.fr/916/9782412032916_1_75.jpg"/>
                        <Product title="React Quick Start" price={42.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61azQ7sNkaL.jpg"/>
                    </div>
                </div>
            </SectionHome>
    );
};

const SectionHome = styled.section`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
  
  .home-row{
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 100px;
  }
`

export default Home;