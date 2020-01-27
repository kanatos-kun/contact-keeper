import React, { Fragment } from "react";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";

// import "./lib/fontawesome/js/all.min.js";
import NavBar from "./component/layout/NavBar";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
