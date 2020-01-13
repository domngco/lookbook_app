import React, { Component } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

export class CoverImage extends Component {
  next = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  previous = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  render() {
    return (
      <React.Fragment>
        <div>Step 2</div>
        <Dropzone
          getUploadParams={this.getUploadParams}
          onChangeStatus={this.handleChangeStatus}
          styles={{ previewImage: { maxHeight: 500, maxWidth: 500 } }}
          accept="image/png, image/jpeg"
          maxFiles={1}
          multiple={false}
        >
          Drop an Image
        </Dropzone>
        <form>
          <button onClick={this.next}>Next</button>
          <button onClick={this.previous}>Previous</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CoverImage;
