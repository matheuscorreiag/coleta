import React, { useState } from "react";
import ArrowHeader from "../../components/PageArrowHeader/ArrowHeader";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

import "./login.css";
import "../../assets/styles/global.css";
import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const history = useHistory();

  function validation() {
    api.get("/users").then((response) => {
      const data = response.data;
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
          setAuth(true);
          return history.push("userindex");
        } else {
          return swal("Erro!", "Confira seus dados e tente novamente.");
        }
      }
    });
  }
  return (
    <>
      <ArrowHeader />
      <div className="login-container">
        <div className="background-login">
          <h1>Fazer Login</h1>
          <div className="login-input">
            <div className="login-email">
              <p>E-mail</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login-password">
              <p>Senha</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Link className="link" to="/forgot">
                Esqueceu a senha?
              </Link>
            </div>
            <div className="submit-login-button">
              <button onClick={validation}> Entrar</button>
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
    </>
  );
}

export default Login;
