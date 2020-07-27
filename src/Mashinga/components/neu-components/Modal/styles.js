import styled from "styled-components";
import colors from "../../../config/colors";
import { OutsetComponentStyles } from "../neomorphismStyles";

export const ModalContainer = styled.div`
    z-index:10;
    ${OutsetComponentStyles};
    padding:20px;
`;

export const ScreenOfDarkness = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background-color:${colors.text}aa;
  z-index: 5;
  display:flex;
  align-items:center;
  justify-content:center;
`;