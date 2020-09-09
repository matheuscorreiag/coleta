import React from 'react'
import { Link } from 'react-router-dom'

import './arrowheader.css'

function ArrowHeader() {
    return (
        <div className="top-search">
            <img src={require("../../assets/img/cgalogo.png")} alt='cgalogo' />
            <div className="container-back-search">
                <Link to="/">
                    <div className="link-search">
                        <img src={require("../../assets/img/icons/seta.svg")} alt='seta' />
                        <p>Voltar para o início</p>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default ArrowHeader;
