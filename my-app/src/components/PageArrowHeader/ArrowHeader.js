import React from "react";
import { Link } from "react-router-dom";

import "./arrowheader.css";

const ArrowHeader = () => {
  return (
    <div className="top-search">
      <img src={require("../../assets/img/cgalogo.png")} alt="cgalogo" />
      <div className="container-back-search">
        <div className="link-search">
          <Link to="/">
            <img src={require("../../assets/img/icons/seta.svg")} alt="seta" />
            <p>Voltar para o início</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArrowHeader;
