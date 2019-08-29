import React, { useState, useContext} from 'react'

const HabitState = (props) => {

  const initialState = {
    habitList: [],
  }

  const [state, setState] = useState(initialState);

  return (
    <habitContext.Provider
      value={{
        state
      }}>
      {props.children}
    </habitContext.Provider>
  )
}

export default HabitState

export const habitContext = React.createContext();
export const useHabit = () => {
  const { state } = useContext(habitContext)
  return state
}