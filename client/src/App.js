import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;