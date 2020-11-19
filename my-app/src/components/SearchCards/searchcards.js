import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrokenItems, getAllReadyItems } from "../../store/fetchActions";

import "./styles.css";
const SearchCards = () => {
  const items = useSelector((state) => state.items); //selecionando
  const [search, setSearch] = useState(localStorage.getItem("@coleta-search"));
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { userId } = useSelector((state) => state.permissions);

  const modal = (index) => {
    var element = document.querySelectorAll(".modal-overlay");
    const element2 = document.getElementsByClassName("modal-buttons");

    if (isAuthenticated) {
      if (element[index].style.height === "250px") {
        element[index].style.height = "200px";
        element2[index].classList.remove("modal-buttons-active");
      } else {
        element[index].style.height = "250px";
        element2[index].classList.add("modal-buttons-active");
      }
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
    if (userId === 1 || userId === 0) {
      dispatch(getAllReadyItems(search));
    } else if (userId === 2) {
      dispatch(getAllBrokenItems(search));
    } //eslint-disable-next-line
  }, [dispatch]); //tirar warning
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
        <div className="results-container">
          <div className="modal-overlay">
            <div onLoad={incrementId} className="card" onClick={() => modal(items.indexOf(item))}>
              <div className="middle-align">
                <div className="img-container">
                  <img src={item.image} alt="test" />
                </div>
              </div>
              <div className="middle-align">
                <div className="description-container">
                  <React.Fragment key={item.id}>
                    <p>Categoria: {item.category}</p>
                    <p>Marca: {item.brand}</p>
                  </React.Fragment>
                </div>
              </div>
              {/* <div className="middle-align">
                <div className="state-container">
                  <p>Reuso</p>
                </div>
              </div> */}
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
