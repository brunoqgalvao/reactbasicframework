import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import States from "./states/States";
import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <States>
      <Router>
        <Container>
          <AppRouter>
          </AppRouter>
        </Container>
      </Router>
    </States>
  );
}

export default App;
