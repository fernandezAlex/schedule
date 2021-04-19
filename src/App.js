
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/schedule">
            <SignIn />
          </Route>
          <Route path="/schedule/sign-up">
            <SignUp />
          </Route>
          <Route path="/schedule/dashboard">
            <Dashboard />
          </Route>
          <p> Página no encontrada </p>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;