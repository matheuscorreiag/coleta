import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllItems } from "../../store/fetchActions";

import "./styles.css";

const SearchCards = () => {
  const items = useSelector((state) => state.items); //selecionando
  const [search, setSearch] = useState(localStorage.getItem("@coleta-search"));
  const dispatch = useDispatch();

  const modal = (index) => {
    var element = document.querySelectorAll(".modal-overlay");
    const element2 = document.getElementsByClassName("modal-buttons");

    if (element[index].style.height === "250px") {
      element[index].style.height = "200px";
      element2[index].classList.remove("modal-buttons-active");
    } else {
      element[index].style.height = "250px";
      element2[index].classList.add("modal-buttons-active");
    }
  };
  const incrementId = () => {
    var element = document.querySelectorAll(".card");

    for (var i = 0; i < element.length; i++) {
      element[i].setAttribute("id", i);
    }
  };

  const setSearchFilter = () => {
    if (search !== "") {
      localStorage.setItem("@coleta-search", search);
      window.location.reload();
    }
  };
  useEffect(() => {
    //disparando action de chamada na api
    dispatch(getAllItems(search)); //eslint-disable-next-line
  }, [dispatch]); //fix warning
  return (
    <>
      <div id="user" className="search-container ">
        <div className="input-button">
          <input
            type="text"
            placeholder="  Digite aqui"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="search" onClick={setSearchFilter}>
            <img src={require("../../assets/img/icons/1656641261586786442.svg")} alt="lupa" />
          </button>
        </div>
      </div>

      {items.map((item) => (
        <div className="results-container ">
          <div className="modal-overlay">
            <div onLoad={incrementId} className="card" onClick={() => modal(items.indexOf(item))}>
              <div className="middle-align">
                <div className="img-container">
                  <img
                    src={require("../../assets/img/icons/1656641261586786442.svg")}
                    alt="cgalogo"
                  />
                </div>
              </div>
              <div className="middle-align">
                <div className="description-container">
                  <React.Fragment key={item.id}>
                    <p>Descrição: {item.description}</p>
                    <p>Marca: {item.brand}</p>
                    {/* <p>Local: {item.comments}</p> */}
                  </React.Fragment>
                </div>
              </div>
              <div className="middle-align">
                <div className="state-container">
                  <p>Reuso</p>
                </div>
              </div>
            </div>

            <div id="modal-buttons" className="modal-buttons">
              <button type="button" className="test">
                Entrar em contato
              </button>
              <button type="button" className="test">
                Ver detalhes
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchCards;
