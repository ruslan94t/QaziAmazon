import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <h2>Checkout Page</h2>
        </Route>
        <Route path="/login">
        <h2>Login Paga</h2>
        </Route>
        <Route path="/">
          <h2>Home Page</h2>
        </Route>
      </Switch>

      </div>
</Router>

  );
}

export default App;
