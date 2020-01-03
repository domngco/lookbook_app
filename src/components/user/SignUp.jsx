import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <div>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <input type="submit" value="Sign In" />
              <input type="reset" value="Clear" />
              <div>
                {" "}
                Already have an account? <Link to="/signin">Sign In</Link>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
