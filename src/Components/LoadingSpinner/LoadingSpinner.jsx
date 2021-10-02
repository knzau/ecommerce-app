import React, { Component } from "react";
import { SpinnerContainer, SpinnerOverlay } from "./LoadingSpinnerStyles";

class LoadingSpinner extends Component {
  render() {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  }
}

export default LoadingSpinner;
