import React, { useState, useContext, useEffect } from "react";
import firebase from '../services/firebaseUtils';
import { goToHome, goToRegister } from '../services/dynamicRouting';


const AuthState = props => {
  
  const initialState = {
    user: null,
    isAuth:false,
    credential:null,
  }

  const [state, setState] = useState(initialState);

  async function login(email,password) {
    try {
      const res = await firebase.login(email, password);
      console.log(res)
      const user = {
        email: res.user.email,
        name: res.user.displayName,
        token: res.user,
        credential: res.credential,
        id: res.user.uid
      }
      await setState({...state,user,isAuth:true});
      goToHome();

    } catch (err) {
      alert(err.message);
    }
  }
  async function register(name,email,password) {
    try {
      //The register in the Firebase class is running with useState data.
      await firebase.register(name, email, password);
    } catch (err) {
      alert(err.message);
    }
  }

  async function logout( ) {
    try {
      //The register in the Firebase class is running with useState data.
      await firebase.logout();
    } catch (err) {
      alert(err.message);
    }
  }


  // const onChange = () => {
  //   console.log('changed');
  // }

  // useEffect(() => {
  //   // listen for auth state changes
  //   const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
  //   // unsubscribe to the listener when unmounting
  //   return () => unsubscribe()
  // }, [])


  return (
    <authContext.Provider
      value={{
        state,
        login,
        register
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;


const authContext = React.createContext();
export const useAuth = () => {
  return useContext(authContext);;
}

export const useSession = () => {
  const { state } = useContext(authContext)
  return state;
}
