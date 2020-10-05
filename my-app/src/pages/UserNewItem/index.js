import React, { useState } from "react";
import UserNavBar from "../../components/UserNavBar/usernavbar";
import Add from "@material-ui/icons/Add";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemFetch } from "../../store/fetchActions";

import db from "../../data/types.json";

import "./styles.css";
import "../../assets/styles/global.css";

const UserNewItem = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const data = db.groups;
  const [params, setParams] = useState({
    description: "",
    brand: "",
    situation: 0,
    comments: "",
    image: "",
  });
  const [groupList, setGroupList] = useState(0);

  const handleGroup = (event) => {
    setParams({ ...params, description: event.target.name });
    setGroupList(event.target.value);
  };

  const onSubmit = () => {
    dispatch(addItemFetch(params));
    setParams({
      description: "",
      brand: "",
      situation: 0,
      comments: "",
      image: "",
    });
    swal("Pronto!", "Novo equipamento cadastrado com sucesso", "success");
    history.push("/searchresults");
  };
  return (
    <div className="usernewitem">
      <UserNavBar />
      <div className="usernewitem-page">
        <div className="usernewitem-container">
          <div className="usernewitem-form">
            <h1>Cadastrar componentes</h1>
            <h2>Dados</h2>

            <div className="newitemform">
              Categoria
              <select onChange={(e) => handleGroup(e)}>
                <option value={0}> Selecione um grupo</option>
                {data.map((category) => (
                  <option key={category.type} value={category.id} name={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
              Grupo
              <select
                onChange={(event) => setParams({ ...params, description: event.target.value })}
              >
                <option value={0}> Selecione um tipo de componente</option>

                {data.map((category) =>
                  category.group.map(
                    (group) =>
                      groupList == category.id && (
                        <option key={group.id} value={group.id}>
                          {group.name}
                        </option>
                      )
                  )
                )}
              </select>
              Marca
              <input
                type="text"
                onChange={(event) => setParams({ ...params, brand: event.target.value })}
              />
              Origem
              <input
                type="text"
                onChange={(event) => setParams({ ...params, brand: event.target.value })}
              />
              Tombamento
              <input
                type="text"
                onChange={(event) => setParams({ ...params, brand: event.target.value })}
              />
              Modelo
              <input
                type="text"
                onChange={(event) => setParams({ ...params, brand: event.target.value })}
              />
              Numero de série
              <input
                type="text"
                onChange={(event) => setParams({ ...params, brand: event.target.value })}
              />
              Peso
              <input
                type="text"
                onChange={(event) => setParams({ ...params, brand: event.target.value })}
              />
              Situação
              <select onChange={(event) => setParams({ ...params, situation: event.target.value })}>
                <option value={0}> Selecione a situação do equipamento</option>
                <option value={1}> Reciclagem</option>
                <option value={2}> Reuso</option>
                <option value={3}> Doação</option>
              </select>
              <div className="notes">
                Comentários (opcional)
                <textarea
                  onChange={(event) => setParams({ ...params, comments: event.target.value })}
                  placeholder="Insira informações adicionais"
                ></textarea>
              </div>
              <div className="uploadImage-container">
                <div className="uploadImage">
                  <Add />
                </div>
                <div className="uploadImage-text">
                  <span>Adicione uma imagem</span>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <button className="confirm" onClick={onSubmit}>
              Confirmar
            </button>
            <button className="cancel"> Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNewItem;
