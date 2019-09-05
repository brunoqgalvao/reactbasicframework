import React from "react";
import HabitState from "./HabitState";
import AuthState from "./AuthState";
import AlertState from "./AlertState";
import LangState from "./LangState";
import ModalState from "./ModalState";

const States = props => {
  return (
    <LangState>
      <AlertState>
        <ModalState>
        <AuthState>
          <HabitState>
            {props.children}
          </HabitState>
        </AuthState>
        </ModalState>
      </AlertState>
    </LangState>
  );
};

export default States;
