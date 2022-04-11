import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate  } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                navigate.push('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth => {
                if(auth){
                    navigate.push('/');
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <h2 className="login__logoTitle">Bienvenue :)</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Connexion</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Mot de passe</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </form>

                        <button type='submit' className='login__signInButton' onClick={signIn}>Let's go !</button>
            <button className="login__registerButton" onClick={register}>Crée ton compte 😎</button>

            </div>
        </div>
    )
}

export default Login;