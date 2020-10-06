import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ArrowHeader from "../../components/PageArrowHeader/ArrowHeader";
import swal from "sweetalert";
/* import { authLogin } from "../../store/fetchActions"; */
import { authFetch } from "../../store/fetchActions";
import api from "../../services/api";

import "./styles.css";
import "../../assets/styles/global.css";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const signIn = () => {
    if (login.email !== "" && login.password !== "") {
      api
        .post("/login", login)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          dispatch(authFetch());
          history.push("userindex");
        })
        .catch((err) => {
          console.log("CHEGUEI");
          swal("Erro!", "Confira seus dados e tente novamente.");
          console.log(err);
        });
    }
  };
  return (
    <div className="login">
      <ArrowHeader />
      <div className="login-container">
        <div className="background-login">
          <h1>Fazer Login</h1>
          <div className="login-input">
            <div className="login-email">
              <p>E-mail</p>
              <input type="text" onChange={(e) => setLogin({ ...login, email: e.target.value })} />
            </div>
            <div className="login-password">
              <p>Senha</p>
              <input
                type="password"
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
              />

              <Link className="link" to="/forgot">
                Esqueceu a senha?
              </Link>
            </div>
            <div className="submit-login-button">
              <button onClick={signIn}> Entrar</button>
            </div>
            <div className="create">
              <p> Não tem acesso? </p>
              <Link className="link" to="/register">
                Crie uma conta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
