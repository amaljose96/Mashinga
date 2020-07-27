import React from "react";
import { CheckBoxContainer, CheckBoxComponent, CheckBoxText } from "./styles";
import colors from "../../../colors";

function CheckBox({ text, value, setValue }) {
  function onChange(e) {
    setValue(!value);
  }
  if (text) {
    return (
      <CheckBoxContainer>
        <CheckBoxComponent type="checkbox" value={value} onClick={onChange}>
          {value && (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1943 10.182C20.7801 9.59621 20.7801 8.64646 20.1943 8.06068V8.06068C19.6086 7.47489 18.6588 7.47489 18.073 8.06068L12.5417 13.592C11.7607 14.373 10.4943 14.373 9.71329 13.592L8.182 12.0607C7.59621 11.4749 6.64646 11.4749 6.06068 12.0607V12.0607C5.47489 12.6465 5.47489 13.5962 6.06068 14.182L9.0031 17.1244C9.0048 17.1261 9.0048 17.1289 9.0031 17.1306V17.1306C9.00139 17.1323 9.00139 17.1351 9.0031 17.1368L10.0606 18.1943C10.6464 18.7801 11.5962 18.7801 12.182 18.1943L20.1943 10.182Z"
                fill={colors.primary}
              />
            </svg>
          )}
        </CheckBoxComponent>
        <CheckBoxText>{text}</CheckBoxText>
      </CheckBoxContainer>
    );
  }
  return (
    <CheckBoxContainer>
      <CheckBoxComponent type="checkbox" value={value} onClick={onChange}>
        {" "}
        {value && (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1943 10.182C20.7801 9.59621 20.7801 8.64646 20.1943 8.06068V8.06068C19.6086 7.47489 18.6588 7.47489 18.073 8.06068L12.5417 13.592C11.7607 14.373 10.4943 14.373 9.71329 13.592L8.182 12.0607C7.59621 11.4749 6.64646 11.4749 6.06068 12.0607V12.0607C5.47489 12.6465 5.47489 13.5962 6.06068 14.182L9.0031 17.1244C9.0048 17.1261 9.0048 17.1289 9.0031 17.1306V17.1306C9.00139 17.1323 9.00139 17.1351 9.0031 17.1368L10.0606 18.1943C10.6464 18.7801 11.5962 18.7801 12.182 18.1943L20.1943 10.182Z"
              fill={colors.primary}
            />
          </svg>
        )}
      </CheckBoxComponent>
    </CheckBoxContainer>
  );
}
export default CheckBox;