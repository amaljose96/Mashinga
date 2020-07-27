import styled from "styled-components";
import { InsetComponentStyles, InsetActiveStyles } from "../neomorphismStyles";
import colors from "../../../config/colors";

export const InputContainer = styled.div``;
export const InputLabel = styled.div`
  font-size: 12px;
  text-align:left;
  color: ${(props) => (props.error ? colors.error : colors.text)};
  margin-bottom: 12px;
`;
export const InputComponent = styled.input`
  -webkit-appearance: none;
  ${InsetComponentStyles}
  padding:10px 20px;
  width: ${(props) => props.width};
  border: none;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
  color: ${colors.text};
  transition: all 0.2s;
  :focus {
    ${InsetActiveStyles};
  }
`;
