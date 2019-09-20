import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from '@Components/Header/Header';
import Homepage from '@Components/Homepage/Homepage';
import Signup from '@Components/Signup/Signup';
import Profile from '@Components/Profile/Profile';
import Logout from '@Components/Logout/Logout';
import NotFound from '@Components/NotFound/NotFound';
import Login from '@Components/Login/Login';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={Signup} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={Homepage} />

      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
