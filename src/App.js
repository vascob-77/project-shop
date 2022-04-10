//Librairies
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";


function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/checkout' element={<Checkout />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
