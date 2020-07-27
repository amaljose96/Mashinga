import React from "react";
import { TextAreaContainer,TextAreaLabel,TextAreaComponent} from "./styles";

function TextArea({
  type = "text",
  label = false,
  value = "",
  setValue,
  width = "300px",
}) {
  if (label) {
    return (
      <TextAreaContainer>
        <TextAreaLabel>{label}</TextAreaLabel>
        <TextAreaComponent
          width={width}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </TextAreaContainer>
    );
  }
  return (
    <TextAreaContainer>
      <TextAreaComponent
        width={width}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </TextAreaContainer>
  );
}
export default TextArea;
