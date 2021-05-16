import React from "react";

import CustomButtonContainer from "./custom-buttton.styles";

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
