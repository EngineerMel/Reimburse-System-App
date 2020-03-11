import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SubmitForm from "./Components/SubmitForm";
import HanldeReimbursementRequests from "./Components/HandleReimbursementRequests";
import LoginForm from "./Components/LoginForm";
import ViewMyForms from "./Components/ViewMyForms";
import Profile from "./Components/Profile";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import DashBoard from "./Components/admin/DashBoard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/home" component={LoginForm} />
            <Route path="/viewmyforms" component={ViewMyForms} />
            <Route path="/submitform" component={SubmitForm} />
            <Route
              path="/handlereimbursement"
              component={HanldeReimbursementRequests}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/nestednav" component={DashBoard} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
