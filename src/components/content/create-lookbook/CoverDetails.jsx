import React, { Component } from "react";

export class CoverDetails extends Component {
  next = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    let { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <div>Step 1</div>
        <form>
          <input
            placeholder="Title"
            onChange={handleChange("title")}
            defaultValue={values.title}
          />
          <input
            placeholder="Description"
            onChange={handleChange("description")}
            defaultValue={values.description}
          />
          <button onClick={this.next}>Next</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CoverDetails;
