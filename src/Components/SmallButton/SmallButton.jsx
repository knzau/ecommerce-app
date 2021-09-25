import React from "react";
import { SmallButtonContainer } from "../SmallButton/SmallButtonStyles";

const SmallButton = ({ children, ...props }) => {
  return (
    <SmallButtonContainer {...props}>
      <span>{children}</span>
    </SmallButtonContainer>
  );
};

export default SmallButton;
