

import React, { useState, useContext} from 'react'
import uuid from 'uuid';

const AlertState = (props) => {

  const [alerts, setAlerts] = useState([]);


  // show alert in modal
  const show = (message,level,id) => {
    if(id==null) id=uuid();
    if(level==null) level = 'default';
    const newAlert = { id, message, level, show:true };
    setAlerts([...alerts, newAlert]);
    return id;
  }
  // activate alert by id
  const activateById = (message,level,id) => {
    if(id==null) id=uuid();
    if(level==null) level = 'default';
    const newAlert = { id, message, level, show:false };
    setAlerts([...alerts, newAlert]);
    return id;
  }
  // hide all alerts
  const hideAll = () => {
    setAlerts([]);
  }
  // hide alert by id
  const hideById = (id) => {
    const newAlerts = alerts.filter(alert => alert.id !== id);
    setAlerts(newAlerts);
  }
  return (
    <alertContext.Provider
      value={{
        alerts,
        show,
        hideAll,
        hideById
      }}>
      {props.children}
    </alertContext.Provider>
  )
}

export default AlertState

export const alertContext = React.createContext();
export const useAlert = () => {
  const state = useContext(alertContext)
  return state;
}