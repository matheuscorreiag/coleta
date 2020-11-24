import React from "react";

import "./styles.css";

import "../../assets/styles/global.css";

import UserNavBar from "../../components/UserNavBar/usernavbar";

const UserSettings = () => {
  return (
    <div className="usersettings-page">
      <UserNavBar />
      <div className="settings-bg">
        <h1>Dados Pessoais</h1>
        <div className="updateuser-form">
          <div className="span-input-row">
            <span> Nome </span>
            <input type="text" placeholder="nome" />
            <span> E-mail </span>
            <input type="text" placeholder="e-mail" />
          </div>
          <div className="span-input-col">
            <div className="span-input-row">
              <span> Celular </span>
              <input type="text" placeholder="celular" />
            </div>
            <div className="span-input-row">
              <span> Perfil </span>
              <input type="text" placeholder="perfil" />
            </div>
          </div>
          <div className="span-input-col">
            <div className="span-input-row">
              <span> Senha </span>
              <input type="text" placeholder="senha" />
            </div>
            <div className="span-input-row">
              <span> Repetir senha </span>
              <input type="text" placeholder="repetir senha" />
            </div>
          </div>
          <div className="center-data">
            <h1>Dados do centro de ensino</h1>
            <div className="span-input-row">
              <span> Nome do centro </span>
              <input type="text" placeholder="nome" />
              <div className="span-input-col">
                <div className="span-input-row">
                  <span> Cidade </span>
                  <input type="text" placeholder="cidade" />
                </div>
                <div className="span-input-row">
                  <span> Estado </span>
                  <input type="text" placeholder="estado" />
                </div>
              </div>
            </div>
          </div>
          <div className="button-update">
            <button type="button"> Atualizar dados</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
