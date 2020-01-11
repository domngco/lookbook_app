import React, { Component } from "react";

export class CreateCover extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <React.Fragment>
        <div>Step 1</div>
      </React.Fragment>
    );
  }
}

export default CreateCover;
