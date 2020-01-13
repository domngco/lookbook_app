import React, { Component } from "react";

export class CoverConfirmation extends Component {
  next = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  previous = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    let { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <div>Step 3</div>
        <form>
          <button onClick={this.next}>Confirm</button>
          <button onClick={this.previous}>Previous</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CoverConfirmation;
