import React, { useState, useContext} from 'react'

const AuthState = (props) => {

  const [user, setUser] = useState(null);

  return (
    <authContext.Provider
      value={{
        user
      }}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState

export const authContext = React.createContext();
export const useAuth = () => {
  const { user } = useContext(authContext)
  return user
}