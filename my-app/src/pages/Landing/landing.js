import React from 'react';
import Header from '../../components/PageMenuHeader/Header';
import { Link } from 'react-router-dom';

import './landing.css';
import '../../assets/styles/global.css'

function Landing() {
  return (
    <>
      <Header />

      <div className="mid-app">
        <div className="wrapper-app">
          <div className="title-app">
            <h1>Seu ambiente de <br />coleta de equipamentos<br /> eletroeletrônicos.</h1>
            <p>
              Ajudamos pessoas a encontrarem pontos <br />de coleta de forma eficiente.
                    </p>
          </div>
          <img src={require('../../assets/img/pngwave.png')} alt='pngwave' />
        </div>

        <div className="actions-app">

          <Link to='/search'>
            <button>
              <div className="search-app">
                <img src={require('../../assets/img/icons/1656641261586786442.svg')} alt='lupa' />
                <p>Buscar por um
                componente
                            </p>
              </div>
            </button>
          </Link>

          <div className="divider-app"></div>

          <Link to='/login'>
            <button>
              <div className="login-app">
                <img src={require('../..//assets/img/icons/17755256141554126449.svg')} alt='chave' />
                <p>Fazer login</p>
              </div>
            </button>
          </Link>

        </div>
      </div>
    </>

  );
}

export default Landing;
