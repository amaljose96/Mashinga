import React from "react";
import {
  ButtonContainer,
  LoaderContainer,
  ButtonTextContainer,
} from "./styles";
import Spinner from "../Spinner";

function Button({
  onClick,
  text = "Submit",
  type = "primary",
  disabled = false,
  isLoading = false,
}) {
  return (
    <ButtonContainer
      isLoading={isLoading}
      onClick={!disabled && !isLoading && onClick}
      type={type}
      disabled={disabled}
    >
      <LoaderContainer isLoading={isLoading}>
        <Spinner size="15px" />
      </LoaderContainer>

      <ButtonTextContainer>{text}</ButtonTextContainer>
    </ButtonContainer>
  );
}
export default Button;
