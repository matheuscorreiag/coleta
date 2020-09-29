import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Landing from "../../pages/Landing";
import About from "../../pages/About";
import Search from "../../pages/Search";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import SearchResults from "../../pages/SearchResults";
import UserIndex from "../../pages/UserIndex/index";
import UserNewItem from "../../pages/UserNewItem";
import UserSearch from "../../pages/UserSearch";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/search" exact={true} component={Search} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        {/*         <Route
          path="/completeregister"
          exact={true}
          component={CompleteRegister}
        /> */}
        <Route path="/searchresults" exact={true} component={SearchResults} />

        <PrivateRoute path="/userindex" exact={true} component={UserIndex} />
        <PrivateRoute
          path="/usernewitem"
          exact={true}
          component={UserNewItem}
        />
        <Route path="/usersearch" exact={true} component={UserSearch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
