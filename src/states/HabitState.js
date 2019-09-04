import React, { useState, useContext} from 'react'

const HabitState = (props) => {

  const initialState = {
    habitList: [
      {
        id: '0',
        name:'Habito Teste'
      }
    ],
  }
  const [state, setState] = useState(initialState);

  const addHabit = (habit) => {
    const newHabitList = state.habitList.push(habit)
    setState({...state, habitList: newHabitList})
  }

  const RemoveHabit = (habitId) => {
    const newHabitList = state.habitList.filter(habit => habit.id)
    setState({...state, habitList: newHabitList})
  }


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