import React from "react";
import { Router, Route, withRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import  { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
// Fazer protected route depois
const AppRouter = props => {
  return (
    <Router history={history} >
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Register} />
      <Route exact path="/teste">
      </Route>
      {props.children}
    </Router>
  );
};

export default AppRouter;
