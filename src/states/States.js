import React from "react";
import HabitState from "./HabitState";
import AuthState from "./AuthState";
import AlertState from "./AlertState";
import LangState from "./LangState";

const States = props => {
  return (
    <LangState>
      <AlertState>
        <AuthState>
          <HabitState>
            {props.children}
          </HabitState>
        </AuthState>
      </AlertState>
    </LangState>
  );
};

export default States;
