import React from "react";

import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
        <Checkout />
        </Route>
        <Route path="/login">
        <h2>Login Paga</h2>
        </Route>
        <Route path="/">
          <Header />
           <Home />
        </Route>
      </Switch>

      </div>
</Router>

  );
}

export default App;
