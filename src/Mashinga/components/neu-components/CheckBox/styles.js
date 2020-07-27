import styled from "styled-components";
import {
  OutsetComponentStyles,
  OutsetActiveStyles,
  OutsetHoverStyles,
  InsetComponentStyles,
  InsetHoverStyles,
  InsetActiveStyles,
} from "../neomorphismStyles";
import colors from "../../../config/colors";

export const CheckBoxContainer = styled.div`
  display:flex;
  align-items:center;
`;
export const CheckBoxComponent = styled.div`
  ${(props) => (props.value ? InsetComponentStyles : OutsetComponentStyles)};
  width: 26px;
  height: 26px;
  margin: 2px;
  border-radius: 10px;
  border: solid 2px
    ${(props) => (props.value ? colors.primary : colors.lightShade)};
  :hover {
    ${(props) => (props.value ? InsetHoverStyles : OutsetHoverStyles)};
    cursor: pointer;
    border-color: ${(props) =>
      props.value ? colors.primary : colors.darkShade};
  }
  :active {
    ${(props) => (props.value ? InsetActiveStyles : OutsetActiveStyles)};
    border-color: ${colors.primary};
  }
`;
export const CheckBoxText = styled.div`
  margin-left:15px;
`;
