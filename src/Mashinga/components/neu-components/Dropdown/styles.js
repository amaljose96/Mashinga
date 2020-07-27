import styled from "styled-components";
import {
  OutsetComponentStyles,
  OutsetActiveStyles,
  OutsetHoverStyles,
} from "../neomorphismStyles";
import colors from "../../../config/colors";

export const DropdownContainer = styled.div``;

export const DropdownLabel = styled.div`
  font-size: 12px;
  color: ${(props) => (props.error ? colors.error : colors.text)};
  margin-bottom: 12px;
`;
export const DropdownComponent = styled.select`
  -webkit-appearance: none;
  ${OutsetComponentStyles}
  padding:10px 20px;
  width: ${(props) => props.width};
  border: none;
  outline: none;
  font-size: 14px;
  color: ${props=>props.disabled?colors.darkShade:colors.text};
  transition: all 0.2s;
  :hover {
    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    ${OutsetHoverStyles};
  }
  :focus {
    ${OutsetActiveStyles};
  }
`;

export const DropdownCaret = styled.img`
  position: absolute;
  margin-left: -35px;
  margin-top: 15px;
  pointer-events: none;
  ${OutsetActiveStyles};
`;
