import styled from "styled-components";
import colors from "./config/colors";
import fonts from "./config/fonts";

export const MashingaContainer = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  ${fonts.default};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: scroll;
  box-sizing:border-box;
`;
