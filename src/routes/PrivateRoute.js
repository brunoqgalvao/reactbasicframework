import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../states/AuthState';


const PrivateRoute = ({ component: Component, ...rest}) => {
  const { user, isAuth } = useSession() 
  return (
    <Route { ...rest } render={props => (!user.isAuth || user.id==null)? (
      <Redirect to='/home' />
    ) : (
      <Component {...props}/>
    )
    } />
  )
}

export default PrivateRoute
