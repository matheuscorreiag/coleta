import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowHeader from "../../components/PageArrowHeader/ArrowHeader";

import swal from "sweetalert";
import "./styles.css";
import "../../assets/styles/global.css";
import { authLogin } from "../../store/fetchActions";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  /* const [auth, setAuth] = useState(false); */
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const validation = () => {
    dispatch(authLogin(login));
    if (isAuthenticated) {
      history.push("userindex");
    } else {
      swal("Erro!", "Confira seus dados e tente novamente.");
    }
  };
  return (
    <>
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
};

export default Login;
