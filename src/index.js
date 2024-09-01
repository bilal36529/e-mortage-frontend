import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import { AuthProvider } from "layouts/AuthContext";
import PrivateRoute from "PrivateRoute";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch>

        {/* Public routes */}
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Auth} />

        {/* Redirect any unknown route to login */}
        <Redirect from="*" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
