import React from "react";
import { Container } from "@material-ui/core";
import States from "./states/States";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <States>
        <Container>
          <AppRouter>
          </AppRouter>
        </Container>
    </States>
  );
}

export default App;
