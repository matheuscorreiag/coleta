import React from "react";
import { useHistory } from "react-router-dom";

import "./header.css";

const Header = () => {
  const history = useHistory();
  return (
    <div className="top-header">
      <div className="logo-header">
        <img src={require("../../assets/img/cgalogo.png")} alt="cgalogo" />
      </div>
      <div className="menu-header">
        <button className="link-home" onClick={() => history.push("/")}>
          Início
        </button>

        <button className="link-about" onClick={() => history.push("about")}>
          Sobre nós
        </button>
      </div>
    </div>
  );
};

export default Header;
