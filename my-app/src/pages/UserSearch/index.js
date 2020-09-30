import React from "react";
import SearchCards from "../../components/SearchCards/searchcards";
import UserNavBar from "../../components/UserNavBar/usernavbar";

import "./styles.css";

const UserSearch = () => {
  return (
    <div className="usersearch ">
      <UserNavBar />
      <SearchCards />
    </div>
  );
};

export default UserSearch;
