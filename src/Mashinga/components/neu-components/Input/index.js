import React from "react";
import { InputContainer, InputComponent, InputLabel } from "./styles";

function Input({
  type = "text",
  label = false,
  value = "",
  setValue = ()=>{},
  width = "300px",
}) {
  if (label) {
    return (
      <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputComponent
          width={width}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </InputContainer>
    );
  }
  return (
    <InputContainer>
      <InputComponent
        width={width}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </InputContainer>
  );
}
export default Input;
