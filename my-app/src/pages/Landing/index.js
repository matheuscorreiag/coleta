import React from "react";
import Header from "../../components/PageMenuHeader/Header";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { LockOpen, Search } from "@material-ui/icons";

import "./styles.css";
import "../../assets/styles/global.css";

const Landing = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const history = useHistory();

  const verifyAuth = () => {
    if (isAuthenticated) {
      history.push("userindex");
    } else {
      history.push("login");
    }
  };
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
          <button onClick={() => history.push("search")}>
            <Search style={{ color: "#FFF", marginRight: 10 }} />
            <p>Buscar por um componente</p>
          </button>

          <button onClick={verifyAuth}>
            <LockOpen style={{ color: "#FFF", marginRight: 10 }} />
            <p>Fazer login</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
