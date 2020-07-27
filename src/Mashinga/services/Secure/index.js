import APICaller, { POST } from "../apiCaller";
import SecureURLs from "./urls";
function verifyToken(token) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({
        role:"user"
      })
    },500)
   
  })
  return APICaller(POST, SecureURLs.verify, { token });
}
function login(email, password) {
  return APICaller(POST, SecureURLs.login, { email, password });
}
function signUp(user) {
  return APICaller(POST, SecureURLs.signup, user);
}
const SecureService = {
  verifyToken,
  login,
  signUp
};
export default SecureService;
