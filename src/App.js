import React from 'react';
import Main from './components/main'
import Home from './components/home';
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add_new_product" component={Main} />
        <Route path="/update_product/:id" component={Main} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;