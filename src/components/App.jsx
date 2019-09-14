import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '@Components/Header/Header';
import Homepage from '@Components/Homepage/Homepage';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>
);

export default App;
