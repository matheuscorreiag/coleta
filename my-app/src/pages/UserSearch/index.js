import React from "react";
import SearchCards from "../../components/SearchCards/searchcards";
import UserNavBar from "../../components/UserNavBar/usernavbar";

import "./styles.css";

const UserSearch = () => {
  return (
    <>
      <UserNavBar />
      <SearchCards />
    </>
  );
};

export default UserSearch;
