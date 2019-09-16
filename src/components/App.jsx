import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '@Components/Header/Header';
import Homepage from '@Components/Homepage/Homepage';
import Signup from '@Components/Signup/Signup';
import Profile from '@Components/Profile/Profile';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>
);

export default App;
