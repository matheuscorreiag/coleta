import React, { useState } from "react";
import Home from "@material-ui/icons/Home";
import Folder from "@material-ui/icons/Folder";
import Add from "@material-ui/icons/Add";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Settings from "@material-ui/icons/Settings";

import "./userindex.css";
import "../../assets/styles/global.css";
import UserRegisterItems from "../../components/UserRegisterItems/userregisteritems";
import UserHome from "../../components/UserHome/userhome";

function UserIndex() {
  const [home, setHome] = useState(true);
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="sidebar-menu">
        <div id="sidebar" className="sidebar-icons">
          <div className="top-icons">
            <Home />

            <Folder />

            <Add />
          </div>
          <div className="bottom-icons">
            <Settings />
            <ExitToApp />
          </div>
        </div>
      </div>

      <div className="main">
        <UserHome />
        <UserRegisterItems />
      </div>
    </>
  );
}
export default UserIndex;
