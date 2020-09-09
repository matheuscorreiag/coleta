import React from 'react'
import ArrowHeader from '../../components/PageArrowHeader/ArrowHeader';
import { Link } from 'react-router-dom';

import './login.css'
import '../../assets/styles/global.css'

function Login() {
    return (
        <>
            <ArrowHeader />
            <div className='login-container'>
                <div className='background-login'>
                    <h1>Fazer Login</h1>
                    <div className="login-input">
                        <div className='login-email'>
                            <p>E-mail</p>
                            <input type='text' />
                        </div>
                        <div className='login-password'>
                            <p>Senha</p>
                            <input type='password' />


                            <Link className='link' to='/forgot'>Esqueceu a senha?</Link>
                        </div>
                        <div className='submit-login-button'>
                            <button> Entrar</button>
                        </div>
                        <div className='create'>
                            <p> Não tem acesso? </p>
                            <Link className='link' to='/register'>Crie uma conta</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;