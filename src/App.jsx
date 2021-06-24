import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Inicio } from "./componentes/Inicio";

function App() {
  return (
    <Router>
      <div className="container mt-1" >
        <div className="btn-group">
          <NavLink className="btn btn-dark mr-1" to="/" activeClassName="active">Inicio</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
