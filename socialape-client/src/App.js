import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import themeFile from './util/theme';

import jwtDecode from 'jwt-decode';

//Components
import NavBar from './components/NavBar';
import AuthRoute from './util/AuthRoute';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme(themeFile);

//to make the token works on the page until it expired
let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <AuthRoute exact path="/" component={home} />
              <AuthRoute exact path="/login" component={login} authenticated={authenticated} />
              <AuthRoute exact path="/signup" component={signup} authenticated={authenticated} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
