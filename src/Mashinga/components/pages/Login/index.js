import React from "react";
import {
  LoginContainer,
  LoginLogo,
  LoginForm,
  LoginFormElement,
  LoginFormSubmit,SignUpLink,
} from "./styles";
import AppLogo from "../../../resources/logo.png";
import Button from "../../neu-components/Button";
import Input from "../../neu-components/Input";
import { useHistory } from "react-router-dom";
import { appBasePath } from "../../../config/paths";

function Login(props) {
  const history = useHistory();
  return (
    <LoginContainer>
      <LoginLogo src={AppLogo} />
      <LoginForm>
        <LoginFormElement>
          <Input label="Email" />
        </LoginFormElement>
        <LoginFormElement>
          <Input label="Password" type="password" />
        </LoginFormElement>
        <LoginFormElement>
          New user? Sign up <SignUpLink onClick={()=>{
            history.push(appBasePath+"signup");
          }}>here.</SignUpLink>
        </LoginFormElement>
        <LoginFormSubmit>
          <Button label="Login" onClick={()=>{
            history.push(appBasePath+"transver");
          }}/>
        </LoginFormSubmit>
      </LoginForm>
    </LoginContainer>
  );
}
export default Login;
