import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowHeader from "../../components/PageArrowHeader/ArrowHeader";
import swal from "sweetalert";

import api from "../../services/api";

import "./styles.css";
import "../../assets/styles/global.css";

const Register = () => {
  const history = useHistory();
  const [params, setParams] = useState({
    name: "",
    email: "",
    password: "",
    cell: 0,
    city: "",
    perfil: "",
    passwordConf: "",
    center: "",
    state: "",
  });

  const setRegisterParams = (event) => {
    event.preventDefault();
    if (
      params.name !== "" &&
      params.email !== "" &&
      params.password !== "" &&
      params.center !== "" &&
      params.cell !== null &&
      params.perfil !== null &&
      params.state !== "" &&
      params.city !== ""
    ) {
      if (params.password === params.passwordConf) {
        api
          .post("users", params)
          .then(async (response) => {
            swal("Pronto!", "Seu usuário foi criado!", "success");
            await new Promise((r) => setTimeout(r, 5000));
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal("Erro!", "Confira seus dados e tente novamente.");
      }
    }
  };
  return (
    <>
      <ArrowHeader />

      <form>
        <div className="register">
          <div className="background-register">
            <h1> Cadastro </h1>

            <div className="inline-block">
              <h2> Dados Pessoais </h2>
              <div className="block">
                <p> Nome </p>
                <input
                  type="text"
                  onChange={(event) => setParams({ ...params, name: event.target.value })}
                />

                <p> E-mail </p>
                <input
                  type="text"
                  onChange={(event) => setParams({ ...params, email: event.target.value })}
                />
              </div>
            </div>
            <div className="dual-block">
              <div className="block">
                <p> Senha </p>
                <input
                  type="password"
                  onChange={(event) => setParams({ ...params, password: event.target.value })}
                />
              </div>
              <div className="block">
                <p> Repetir sua senha </p>
                <input
                  type="password"
                  onChange={(event) => setParams({ ...params, passwordConf: event.target.value })}
                />
              </div>
              <div className="block">
                <p> Celular </p>
                <input
                  type="number"
                  onChange={(event) => setParams({ ...params, cell: event.target.value })}
                />
              </div>
            </div>
            <div className="inline-block">
              <h2> Dados do Centro de ensino </h2>
              <p> Nome do centro </p>
              <input
                type="text"
                onChange={(event) => setParams({ ...params, center: event.target.value })}
              />

              <div className="dual-block">
                <div className="block">
                  <p> Cidade </p>
                  <input
                    type="text"
                    onChange={(event) => setParams({ ...params, city: event.target.value })}
                  />
                </div>
                <div className="block">
                  <p> Estado </p>
                  <input
                    type="text"
                    onChange={(event) => setParams({ ...params, state: event.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="button-register">
              <button type="submit" onClick={setRegisterParams}>
                Concluir cadastro
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
