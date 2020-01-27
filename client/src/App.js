import React, { Fragment } from "react";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";

// import "./lib/fontawesome/js/all.min.js";
import NavBar from "./component/layout/NavBar";
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
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
    </ContactState>
  );
};

export default App;
