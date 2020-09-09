import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

function Header() {
    return (
        <div className="top-header">
            <div className='logo-header'>
                <img src={require('../../assets/img/cgalogo.png')} alt='cgalogo' />
            </div>
            <div className="menu-header">

                <Link className='link-home' to='/'> <button>Início</button></Link>
                <Link className='link-about' to='/about'> <button>Sobre nós </button></Link>

            </div>
        </div >
    );
}

export default Header;