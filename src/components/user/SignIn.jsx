import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class UnconnectedSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async () => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/sign-in", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    console.log("response", response);
    let responseBody = await response.text();
    console.log("responseBody", responseBody);
    let body = JSON.parse(responseBody);
    if (!body.success) {
      alert(body.message);
      return;
    }
    if (body.success) {
      this.props.dispatch({
        type: "signin-successful",
        userDetails: { username: body.username, userID: body.userID }
      });
    }
    this.props.history.push("/");
    return;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
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
              <input type="submit" value="Sign In" />
              <input type="reset" value="Clear" />
              <div>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

let SignIn = connect()(UnconnectedSignIn);
export default withRouter(SignIn);
