import React, { Fragment } from "react";
import "./lib/fontawesome/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Alerts from "./component/layout/Alerts";

// import "./lib/fontawesome/js/all.min.js";
import NavBar from "./component/layout/NavBar";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
