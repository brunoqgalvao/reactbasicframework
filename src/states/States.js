import React from "react";
import HabitState from "./HabitState";
import AuthState from "./AuthState";

const States = (props) => {
  return (
    <AuthState>
      <HabitState>
        {props.children}
      </HabitState>
    </AuthState>
  );
};

export default States;
