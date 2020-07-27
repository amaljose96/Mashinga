import React from "react";
import { SplashContainer , AppLogo, AppTitle } from "./styles";
import LogoImage from "../../../resources/logo.png"
import SecureService from "../../../services/Secure";
import { setUserDetails } from "../../../Store/user/actions";

function Splash() {
  return <SplashContainer>
     <AppLogo src={LogoImage}/>
    <AppTitle>Speech To Text Transcription</AppTitle>
  </SplashContainer>;
}
export default Splash;