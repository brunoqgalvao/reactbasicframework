

import React, { useState, useContext} from 'react'

const ModalState = (props) => {

  const [modals, setModals] = useState([]);


  // show modal
  const open = (id) => {
    const newModal = { id };
    setModals([...modals, newModal]);
    return id;
  }
  const isOpen = (id) => {
    const check = modals.filter(modal => modal.id === id).length > 0;
    return check;
  }

  // hide all modals
  const hideAll = () => {
    setModals([]);
  }
  // hide alert by id
  const close = (id) => {
    const newModal = modals.filter(modal => modal.id !== id);
    setModals(newModal);
  }
  return (
    <modalContext.Provider
      value={{
        modals,
        open,
        close,
        isOpen
      }}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ModalState

export const modalContext = React.createContext();
export const useModal = () => {
  const state = useContext(modalContext)
  return state;
}