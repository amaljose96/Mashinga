import styled from "styled-components";
import { InsetComponentStyles, InsetActiveStyles } from "../neomorphismStyles";
import colors from "../../config/colors";
import fonts from "../../../config/fonts";

export const TextAreaContainer = styled.div``;
export const TextAreaLabel = styled.div`
  font-size: 12px;
  text-align: left;
  color: ${(props) => (props.error ? colors.error : colors.text)};
  margin-bottom: 12px;
`;
export const TextAreaComponent = styled.textarea`
  -webkit-appearance: none;
  ${InsetComponentStyles}
  padding:10px 20px;
  ${fonts.app};
  width: ${(props) => props.width};
  ${(props) =>
    props.width ? `max-width:${props.width};min-width:${props.width}` : ""};
  border: none;
  border-radius:20px;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
  color: ${colors.text};
  transition: all 0.2s;
  :focus {
    ${InsetActiveStyles};
  }
`;
