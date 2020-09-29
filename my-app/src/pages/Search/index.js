import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowHeader from "../../components/PageArrowHeader/ArrowHeader";

import "./styles.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const setSearchFilter = () => {
    if (search !== "") {
      localStorage.setItem("@coleta-search", search);
      history.push("/searchresults");
    }
  };
  return (
    <>
      <ArrowHeader />
      <div className="mid-search">
        <h1> Busque por um componente</h1>
        <input
          type="search"
          placeholder="  Digite aqui"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={setSearchFilter}>Buscar</button>
      </div>
    </>
  );
};

export default Search;
