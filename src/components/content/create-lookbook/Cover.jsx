import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CoverDetails from "./CoverDetails.jsx";
import CoverImage from "./CoverImage.jsx";
import CoverConfirmation from "./CoverConfirmation.jsx";
import Dropzone from "react-dropzone-uploader";

export class UnconnectedCover extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      title: "",
      description: ""
    };
  }

  nextStep = () => {
    let step = this.state.step;
    this.setState({
      step: step + 1
    });
  };

  previousStep = () => {
    let step = this.state.step;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change //

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    console.log("state", this.state);
  };

  // Handle dropzone //

  // Render //

  render() {
    let { step } = this.state;
    let { title, description } = this.state;
    let values = { title, description };

    switch (step) {
      case 1:
        return (
          <CoverDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CoverImage
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 3:
        return (
          <CoverConfirmation
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

let mapStateToProps = state => {
  return {
    username: state.userDetails.username,
    userID: state.userDetails.userID
  };
};

let Cover = connect(mapStateToProps)(UnconnectedCover);
export default withRouter(Cover);
