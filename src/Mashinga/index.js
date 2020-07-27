import React from "react";
import { MashingaContainer } from "./styles";
import Body from "./components/Body";
import { Context } from "./Store";
import Splash from "./components/pages/Splash";
import { appBasePath } from "./config/paths";
import SecureService from "./services/Secure";
import { setUserDetails } from "./Store/user/actions";
import { useHistory } from "react-router-dom";

function Mashinga(props) {
  const { state, dispatch } = React.useContext(Context);
  const [checkLocalToken, setLocalTokenStatus] = React.useState(false);
  let history = useHistory();
  React.useEffect(() => {
    if(window.location.pathname !== appBasePath + "login"){
      let localToken = localStorage.getItem("token");
      SecureService.verifyToken(localToken)
        .then((retrivedUser) => {
            setUserDetails(retrivedUser)(dispatch);
            setLocalTokenStatus(true);
        })
        .catch((err) => {
          if (
            window.location.pathname.includes(appBasePath) &&
            window.location.pathname !== appBasePath + "login"
          ) {
            history.push(appBasePath + "login?redirect=" + window.location.pathname);
          }
          setLocalTokenStatus(true);
        });
    }
    else{
      setLocalTokenStatus(true);
    }
    
  }, []);
  if(!checkLocalToken){
    return <MashingaContainer>
      <Splash/>
    </MashingaContainer>
  }
  else{
    return <MashingaContainer>
    <Body/>
  </MashingaContainer>;
  }
  
}
export default Mashinga;