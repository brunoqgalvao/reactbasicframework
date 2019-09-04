import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import Home from "../pages/Home";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";
import Register from "../components/Auth/Register";
import Dashboard from '../pages/Dashboard';
import  { createBrowserHistory } from 'history';
import LoadingWrapper from '../components/Utilities/LoadingWrapper';
import { useSession } from '../states/AuthState';

export const history = createBrowserHistory();
// Fazer protected route depois
const AppRouter = props => {
  return (
    <LoadingWrapper isLoading={useSession().authLoading} >
    <Router history={history} >
      <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/login" component={Login} notAuth/>
      <PrivateRoute exact path="/register" component={Register} notAuth/>
      <Route exact path="/logout" component={Logout} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} authLevel={1}/>
      <Route path="/" component={Home} />
      </Switch>
      {props.children}
    </Router>
    </LoadingWrapper>

  );
};

export default AppRouter;
