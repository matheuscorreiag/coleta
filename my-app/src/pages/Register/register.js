import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowHeader from "../../components/PageArrowHeader/ArrowHeader";

import "./register.css";
import "../../assets/styles/global.css";
import api from "../../services/api";

function Register() {
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

  function setRegisterParams(event) {
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
        console.log(params);
        api
          .post("users", params)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("DEU ERRO");
      }
    }
  }
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
                  onChange={(event) =>
                    setParams({ ...params, name: event.target.value })
                  }
                />

                <p> E-mail </p>
                <input
                  type="text"
                  onChange={(event) =>
                    setParams({ ...params, email: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="dual-block">
              <div className="block">
                <p> Celular </p>
                <input
                  type="number"
                  onChange={(event) =>
                    setParams({ ...params, cell: event.target.value })
                  }
                />
              </div>
              <div className="block">
                <p> Perfil </p>
                <select
                  value={params.perfil}
                  onChange={(event) =>
                    setParams({ ...params, perfil: event.target.value })
                  }
                >
                  <option value="0"> Usuário Básico </option>
                  <option value="1"> Técnico de Informática I</option>
                  <option value="2"> Técnico de Informática II</option>
                  <option value="3"> Técnico em Eletrônica I</option>
                  <option value="4"> Técnico de Eletrônica II</option>
                </select>
              </div>
              <div className="block">
                <p> Senha </p>
                <input
                  type="password"
                  onChange={(event) =>
                    setParams({ ...params, password: event.target.value })
                  }
                />
              </div>
              <div className="block">
                <p> Repetir sua senha </p>
                <input
                  type="password"
                  onChange={(event) =>
                    setParams({ ...params, passwordConf: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="inline-block">
              <h2> Dados do Centro de ensino </h2>
              <p> Nome do centro </p>
              <input
                type="text"
                onChange={(event) =>
                  setParams({ ...params, center: event.target.value })
                }
              />

              <div className="dual-block">
                <div className="block">
                  <p> Cidade </p>
                  <input
                    type="text"
                    onChange={(event) =>
                      setParams({ ...params, city: event.target.value })
                    }
                  />
                </div>
                <div className="block">
                  <p> Estado </p>
                  <input
                    type="text"
                    onChange={(event) =>
                      setParams({ ...params, state: event.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="button-register">
              <button type="submit" onClick={setRegisterParams}>
                {" "}
                Concluir cadastro
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
