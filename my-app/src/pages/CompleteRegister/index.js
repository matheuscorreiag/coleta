import React from "react";

import "./styles.css";

const CompleteRegister = () => {
  return (
    <div className="swoosh">
      <img
        className="swoosh-image"
        src={require("../../assets/img/icons/complete.svg")}
        alt="swoosh-logo"
      />
      <p>Cadastro Concluído !</p>
    </div>
  );
};

export default CompleteRegister;
