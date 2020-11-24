import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../../pages/Landing";
import About from "../../pages/About";
import Search from "../../pages/Search";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import SearchResults from "../../pages/SearchResults";
import UserIndex from "../../pages/UserIndex/index";
import UserNewItem from "../../pages/UserNewItem";
import UserSearch from "../../pages/UserSearch";
import PrivateRoute from "../_PrivateRoutes";
import UserInfoIndex from "../../pages/UserInfoIndex";
import UserAdmin from "../../pages/UserAdmin";
import UserSettings from "../../pages/UserSettings";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/search" exact={true} component={Search} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/searchresults" exact={true} component={SearchResults} />
        <PrivateRoute path="/userindex" exact={true} component={UserIndex} />
        <PrivateRoute path="/usernewitem" exact={true} component={UserNewItem} />
        <PrivateRoute path="/usersearch" exact={true} component={UserSearch} />
        <PrivateRoute path="/userinfoindex" exact={true} component={UserInfoIndex} />
        <PrivateRoute path="/useradmin" exact={true} component={UserAdmin} />
        <PrivateRoute path="/usersettings" exact={true} component={UserSettings} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
