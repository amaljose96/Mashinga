import styled from "styled-components";
import colors from "../../../config/colors";

export const SignUpContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;`;
export const SignUpHeading = styled.div`
  font-size: 24px;
  color: ${colors.primary};
  margin: 30px 0px;
`;
export const SignUpFormElement = styled.div`
  margin: 20px 0px;
`;
export const SignUpFormSubmit = styled.div`
  margin: 40px 0px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:300px;
`;
export const PersonalDetailsTitle = styled.div`
  font-size: 18px;
  font-weight:bold;
`;
