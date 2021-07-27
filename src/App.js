import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddTarea from "./components/AddTarea";
import Tarea from "./components/Tarea";
import TareaList from "./components/TareaList";

function App() {
    return (
      <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tareas" className="navbar-brand"/>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tareas"} className="nav-link">
              Tareas
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addTarea"} className="nav-link">
            Crear tarea
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tareas"]} component={TareaList} />
          <Route exact path="/addTarea" component={AddTarea} />
          <Route path="/tarea/:id" component={Tarea} />
        </Switch>
      </div>
    </Router>
    );
}

export default App;