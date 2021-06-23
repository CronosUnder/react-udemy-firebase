import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Inicio } from "./componentes/Inicio";
import { Contacto } from "./componentes/Contacto";
import { Nosotros } from "./componentes/Nosotros";
import {Persona} from  "./componentes/Persona";

function App() {
  return (
    <Router>
      <div className="container mt-1" >
        <div className="btn-group">
          <NavLink className="btn btn-dark mr-1" to="/">Inicio</NavLink>
          <NavLink className="btn btn-dark mr-1" to="/nosotros">Nosotros</NavLink>
          <NavLink className="btn btn-dark mr-1" to="/contacto" activeClassName="active btn-primary ">Contacto</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros/:id">
            <Persona/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
