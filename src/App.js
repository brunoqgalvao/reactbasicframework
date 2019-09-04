import React from "react";
import { Container } from "@material-ui/core";
import States from "./states/States";
import AppRouter from "./routes/AppRouter";
import Alert from './components/Alert/Alert'
import LangButton from './components/Utilities/LangButton/LangButton';

function App() {

  return (
    <States>
      <Container>
          <LangButton/>
          <AppRouter>
          </AppRouter>
          <Alert/>
      </Container>
    </States>
  );
}

export default App;
