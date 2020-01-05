import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

export class UnconnectedSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleUsername = event => {
    this.setState({ username: event.target.value });
  };
  handlePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleSubmit = async () => {
    event.preventDefault();
    if (
      !this.state.email.includes("@") ||
      !this.state.email.includes(".com") ||
      this.state.email.length < 5
    ) {
      alert("Invalid Email");
      return;
    }
    if (this.state.password.length < 1) {
      alert("Invalid Password");
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      alert("Reconfirm Password");
      return;
    }
    let data = new FormData();
    data.append("email", this.state.email);
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/sign-up", {
      method: "POST",
      body: data
    });
    console.log("response", response);
    let responseBody = await response.text();
    console.log("responseBody", responseBody);
    let body = JSON.parse(responseBody);
    console.log("body", body);
    if (!body.success) {
      alert(body.message);
      return;
    }
    if (body.success) {
      this.props.dispatch({
        type: "signup-successful",
        userDetails: { username: body.username, userID: body.userID }
      });
      this.props.history.push("/");
      return;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Email"
                onChange={this.handleEmail}
              />
              <input
                type="text"
                placeholder="Username"
                onChange={this.handleUsername}
              />
              <input
                type="text"
                placeholder="Password"
                onChange={this.handlePassword}
              />
              <input
                type="text"
                placeholder="Confirm Password"
                onChange={this.handleConfirmPassword}
              />
              <input type="submit" value="Sign In" />
              <input type="reset" value="Clear" />
              <div>
                Already have an account? <Link to="/signin">Sign In</Link>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

let SignUp = connect()(UnconnectedSignUp);
export default withRouter(SignUp);
