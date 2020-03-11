import React, { Component } from "react";

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
          <div className="form-row">
            <div className="col-7">
              <label htmlFor="username">Username</label>
              <input
                autoFocus
                value={account.username}
                onChange={this.handleChange}
                name="username"
                id="username"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-7">
              <label htmlFor="password">Password</label>
              <input
                value={account.password}
                onChange={this.handleChange}
                id="password"
                name="password"
                type="password"
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary">Login </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
