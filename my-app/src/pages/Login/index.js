import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userBasic, userInfo } from "../../store/ducks/userType";
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

  const signIn = (e) => {
    e.preventDefault();
    if (login.email !== "" && login.password !== "") {
      api
        .post("/login", login)
        .then((res) => {
          if (res.data.token !== undefined) {
            localStorage.setItem("token", res.data.token);
            dispatch(authFetch());

            switch (res.data.typeOfUser) {
              case 0:
                break;
              case 1:
                dispatch(userBasic());
                history.push("userindex");
                break;
              case 2:
                dispatch(userInfo());
                history.push("userinfoindex");
                break;
              case 3:
                console.log("3");
                break;
              case 4:
                console.log("4");
                break;
              default:
                break;
            }
          } else {
            swal("Erro!", "Confira seus dados e tente novamente.");
          }
        })
        .catch((err) => {
          swal("Erro!", "Confira seus dados e tente novamente.");
          console.log(err);
        });
    }
  };
  return (
    <div className="login">
      <ArrowHeader />
      <div className="login-container">
        <form>
          <div className="background-login">
            <h1>Fazer Login</h1>
            <div className="login-input">
              <div className="login-email">
                <p>E-mail</p>
                <input
                  type="text"
                  onChange={(e) => setLogin({ ...login, email: e.target.value })}
                />
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
                <button onClick={(e) => signIn(e)}> Entrar</button>
              </div>
              <div className="create">
                <p> Não tem acesso? </p>
                <Link className="link" to="/register">
                  Crie uma conta
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
