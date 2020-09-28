import React, { useState } from "react";

import "./userindex.css";

import UserNavBar from "../../components/UserNavBar/usernavbar";

function UserIndex() {
  return (
    <>
      <UserNavBar />
      <div className="main"></div>
    </>
  );
}
export default UserIndex;
