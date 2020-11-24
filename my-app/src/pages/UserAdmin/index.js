import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavBar from "../../components/UserNavBar/usernavbar";
import { getAllUsers } from "../../store/fetchActions";

import "./styles.css";
import "../../assets/styles/global.css";

const UserAdmin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users); //selecionando
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]); //tirar warning

  const acceptButton = () => {};

  return (
    <div className="admin-page">
      <UserNavBar />
      <div className="title">
        <h2>Solicitações de cadastro</h2>
      </div>
      <div className="cards-admin">
        {users.map((user) => (
          <React.Fragment key={user.id}>
            {user.userType != 3 && (
              <div className="card-admin">
                <div className="photoReg">
                  <img src={require("../../assets/img/52952358.jpeg")} alt="pessoa" />
                </div>
                <div className="user-toconfirm">
                  <div className="admin-user-data">
                    <span> Nome: {user.name}</span>
                    <span> E-mail: {user.email}</span>
                    <span> Tipo de usuário cadastrado: {user.userType} </span>
                  </div>
                </div>

                <div className="accept-user">
                  <button type="button" onClick={acceptButton}>
                    {" "}
                    Aceitar{" "}
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UserAdmin;
