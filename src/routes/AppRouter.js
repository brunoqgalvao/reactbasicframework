import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const AppRouter = props => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {props.children}
    </Router>
  );
};

export default AppRouter;
