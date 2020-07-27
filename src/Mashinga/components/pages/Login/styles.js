import styled from "styled-components";
import colors from "../../../config/colors";

export const LoginContainer = styled.div`
  text-align: center;
`;

export const LoginLogo = styled.img`
  height: 50px;
  margin: 100px 0px;
`;
export const LoginForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LoginFormElement = styled.div`
  margin: 20px;
`;
export const LoginFormSubmit = styled.div`
  margin: 40px;
`;
export const SignUpLink = styled.span`
  color: ${colors.primary};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
