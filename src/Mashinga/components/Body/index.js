import React from "react";
import { BodyContainer } from "./styles";
import { Route, Switch } from "react-router-dom";
import { appBasePath } from "../../config/paths";
import Splash from "../pages/Splash";
import { Context } from "../../Store";
import { getUser } from "../../Store/user/accessors";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Transver from "../pages/user/Transver";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";

function Body() {
  const { state } = React.useContext(Context);
  if (getUser(state).role === "user") {
    return (
      <BodyContainer>
        <Switch>
          <Route path={appBasePath + "login"} component={Login} />
          <Route path={appBasePath + "transver"} component={Transver} />
          <Route path={appBasePath + "profile"} component={Profile} />
          <Route path={appBasePath + "settings"} component={Settings} />
        </Switch>
      </BodyContainer>
    );
  } else if (getUser(state).role === "admin") {
    return (
      <BodyContainer>
        <Switch>
          <Route path={appBasePath + "login"} component={Login} />
          <Route path={appBasePath + "settings"} component={Settings} />
          <Route path={appBasePath} component={Splash} />
        </Switch>
      </BodyContainer>
    );
  } else {
    return (
      <BodyContainer>
        <Switch>
          <Route path={appBasePath + "login"} component={Login} />
          <Route path={appBasePath + "signup"} component={SignUp} />
          <Route path={appBasePath} component={Splash} />
        </Switch>
      </BodyContainer>
    );
  }
}
export default Body;
