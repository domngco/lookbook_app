import React, { Component } from "react";
import { Link } from "react-router-dom";

class UnconnectedSignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <div>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
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

export default UnconnectedSignIn;
