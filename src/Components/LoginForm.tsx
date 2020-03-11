import React, { Component } from "react";
import Input from "./CommonComponents/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = { username: "", password: "" };

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";

    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  //handles submit and prevents any page reload
  handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);

    this.setState({ errors });
    if (errors) return;
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
