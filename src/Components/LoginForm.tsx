import React from "react";

export interface LoginFormProps {}

export interface LoginFormState {}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-row">
            <div className="col-7">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-7">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="form-control" />
            </div>
          </div>
          <button className="btn btn-primary">Login </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
