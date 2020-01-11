import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateCover from "./CreateCover.jsx";
import CreatePage from "./CreatePage.jsx";

export class UnconnectedCreateLookbook extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1
    };
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  previous = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  nextButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return <button onClick={this.next}>Next</button>;
    }
    return null;
  };

  previousButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return <button onClick={this.previous}>Previous</button>;
    }
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <div>Create A NEW lookbook</div>
        <form>
          <CreateCover currentStep={this.state.currentStep} />
          <CreatePage currentStep={this.state.currentStep} />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    username: state.userDetails.username,
    userID: state.userDetails.userID
  };
};

let CreateLookbook = connect(mapStateToProps)(UnconnectedCreateLookbook);
export default withRouter(CreateLookbook);
