import React, { Component } from "react";

export class CreatePage extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <React.Fragment>
        <div>Step 2</div>
      </React.Fragment>
    );
  }
}

export default CreatePage;
