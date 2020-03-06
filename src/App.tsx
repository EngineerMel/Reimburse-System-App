import React, { Component } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  render() {
    return (
      <main className="container">
        <LoginForm />
      </main>
    );
  }
}

export default App;
