import React, { Fragment } from "react";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";

// import "./lib/fontawesome/js/all.min.js";
import NavBar from "./component/layout/NavBar";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
