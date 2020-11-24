import React, { useState } from "react";
import UserNavBar from "../../components/UserNavBar/usernavbar";
import Add from "@material-ui/icons/Add";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemFetch } from "../../store/fetchActions";

import db from "../../data/types.json";

import "./styles.css";
import "../../assets/styles/global.css";

const UserNewItem = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.permissions);

  const data = db.groups;
  const [params, setParams] = useState({
    category: "",
    group: 0,
    brand: "",
    image: "",
    comments: "",
    origin: "",
    tipping: "",
    model: "",
    serial: "",
    weight: "",
    broken: 1,
  });
  const [groupList, setGroupList] = useState(0);

  const handleGroup = (event) => {
    setParams({ ...params, description: event.target.name });
    setGroupList(event.target.value);
  };

  const onSubmit = async () => {
    await dispatch(addItemFetch(params));
    setParams({
      category: "",
      group: 0,
      brand: "",
      image: "",
      comments: "",
      origin: "",
      tipping: "",
      model: "",
      serial: "",
      weight: "",
    });
    swal("Pronto!", "Novo equipamento cadastrado com sucesso", "success");
    history.push("/searchresults");
  };
  return (
    <div className="usernewitem-page">
      <UserNavBar />
      <div className="newitem-bg">
        <h1> Cadastrar componentes</h1>
        <h2> Dados </h2>
        <div className="newitem-form">
          <div className="span-input-col">
            <div className="span-input-row">
              <span> Categoria </span>
              <input placeholder="Categoria"></input>
            </div>
            <div className="divider"></div>
            <div className="span-input-row">
              <span> Grupo </span>
              <input placeholder="Grupo"></input>
            </div>
          </div>
          <div className="span-input-col">
            <div className="span-input-row">
              <span> Marca </span>
              <input placeholder="Marca"></input>
            </div>
            <div className="divider"></div>
            <div className="span-input-row">
              <span> Origem </span>
              <input placeholder="Origem"></input>
            </div>
          </div>
          <div className="span-input-col">
            <div className="span-input-row">
              <span> Tombamento </span>
              <input placeholder="Tombamento"></input>
            </div>
            <div className="divider"></div>
            <div className="span-input-row">
              <span> Número de série </span>
              <input placeholder="Número de série"></input>
            </div>
          </div>
          <div className="span-input-col">
            <div className="span-input-row">
              <span> Peso </span>
              <input placeholder="Peso"></input>
            </div>
            <div className="divider"></div>
            <div className="add-img">
              <p> Adicione uma imagem</p>
            </div>
          </div>
          <div className="confirm-cancel-buttons">
            <div className="confirm-button">
              <button type="button"> Confirmar</button>
            </div>
            <div className="divider"></div>
            <div className="cancel-button">
              <button type="button"> Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNewItem;
