import React from "react";
import Header from "../../components/PageMenuHeader/Header";
import { Link } from "react-router-dom";
import { LockOpen, Search } from "@material-ui/icons";

import "./styles.css";
import "../../assets/styles/global.css";

const Landing = () => {
  return (
    <>
      <Header />

      <div className="mid-app">
        <div className="wrapper-app">
          <div className="title-app">
            <h1>
              Seu ambiente de <br />
              coleta de equipamentos
              <br /> eletroeletrônicos.
            </h1>
            <p>
              Ajudamos pessoas a encontrarem pontos <br />
              de coleta de forma eficiente.
            </p>
          </div>
          <img src={require("../../assets/img/pngwave.png")} alt="pngwave" />
        </div>

        <div className="actions-app">
          <Link to="/search">
            <button>
              <Search style={{ color: "#FFF", marginRight: 10 }} />
              <p>Buscar por um componente</p>
            </button>
          </Link>
          <div className="divider-app"></div>
          <Link to="/login">
            <button>
              <LockOpen style={{ color: "#FFF", marginRight: 10 }} />
              <p>Fazer login</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
