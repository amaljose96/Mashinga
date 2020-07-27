import { APIBasePath } from "../../config/paths";
const baseURL = APIBasePath + "secure/";
const SecureURLs = {
  verify: baseURL + "verify",
  login: baseURL + "login",
};

export default SecureURLs;
