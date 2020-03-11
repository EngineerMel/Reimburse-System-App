import React, { Component } from "react";
import Input from "./CommonComponents/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  //handles submit and prevents any page reload
  handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  handleChange = (e: { currentTarget: { value: string; name: string } }) => {
    const account: any = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form className="loginform" onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
