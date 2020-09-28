import React from "react";
import { useHistory } from "react-router-dom";
import Home from "@material-ui/icons/Home";
import Folder from "@material-ui/icons/Folder";
import Add from "@material-ui/icons/Add";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Settings from "@material-ui/icons/Settings";

// import { Container } from './styles';
import "./usernavbar.css";
import "../../assets/styles/global.css";

function UserNavBar() {
  const history = useHistory();

  return (
    <div className="sidebar-menu">
      <div id="sidebar" className="sidebar-icons">
        <div className="top-icons">
          <Home onClick={() => history.push("/userindex")} />

          <Folder />

          <Add onClick={() => history.push("/usernewitem")} />
        </div>
        <div className="bottom-icons">
          <Settings />
          <ExitToApp />
        </div>
      </div>
    </div>
  );
}

export default UserNavBar;
