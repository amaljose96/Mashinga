import styled from "styled-components";
import {
  OutsetComponentStyles,
  OutsetActiveStyles,
  OutsetHoverStyles,
} from "../neomorphismStyles";
import colors from "../../../config/colors";
import fonts from "../../../config/fonts";

export const ButtonContainer = styled.button`
  -webkit-appearance: none;
  ${OutsetComponentStyles};
  color: ${(props) =>
    props.disabled || props.isLoading
      ? colors.darkShade
      : props.type === "primary"
      ? colors.primary
      : colors.text};
  max-height: 40px;
  border: none;
  outline: none;
  font-weight: 400;
  padding: 10px;
  padding-left: ${(props) => (props.isLoading ? "30px" : "20px")};
  padding-right: ${(props) => (props.isLoading ? "40px" : "50px")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  transition: all 0.2s;
  :hover {
    cursor: ${(props) =>
      props.disabled || props.isLoading ? "not-allowed" : "pointer"};
    ${OutsetHoverStyles};
  }
  :active {
    ${(props) =>
      !(props.disabled || props.isLoading) &&
      `   ${OutsetActiveStyles};
        background-color:${colors.darkShade}11;`}
  }
`;

export const LoaderContainer = styled.div`
  margin-right: 15px;
  opacity: ${(props) => (props.isLoading ? "1" : "0")};
`;
export const ButtonTextContainer = styled.div`
  ${fonts.app};
`;
