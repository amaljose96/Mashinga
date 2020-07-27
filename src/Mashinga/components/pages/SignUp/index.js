import React from "react";
import {
  SignUpContainer,
  SignUpHeading,
  SignUpFormElement,
  SignUpFormSubmit,
  PersonalDetailsTitle,
} from "./styles";
import Input from "../../neu-components/Input";
import Dropdown from "../../neu-components/Dropdown";
import { genderOptions, languageOptions } from "./constants";
import Button from "../../neu-components/Button";
import { appBasePath } from "../../../config/paths";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const history = useHistory();
  const [userForm, setUserForm] = React.useState({
    email: "",
    password: "",
    confirmedPassword: "",
    firstName: "",
    lastName: "",
    gender: "Male",
    language: "English",
    phoneNumber: "",
  });
  function setFormValue(field, value) {
    setUserForm({
      ...userForm,
      [field]: value,
    });
  }
  return (
    <SignUpContainer>
      <SignUpHeading>Sign Up</SignUpHeading>
      <SignUpFormElement>
        <Input
          label="Email"
          value={userForm["email"]}
          setValue={(newValue) => {
            setFormValue("email", newValue);
          }}
        />
      </SignUpFormElement>
      <SignUpFormElement>
        <Input
          label="Password"
          value={userForm["password"]}
          setValue={(newValue) => {
            setFormValue("password", newValue);
          }}
        />
      </SignUpFormElement>
      <SignUpFormElement>
        <Input
          label="Confirm Password"
          value={userForm["confirmedPassword"]}
          setValue={(newValue) => {
            setFormValue("confirmedPassword", newValue);
          }}
        />
      </SignUpFormElement>
      <SignUpFormElement>
        <PersonalDetailsTitle>Personal Details</PersonalDetailsTitle>
      </SignUpFormElement>
      <SignUpFormElement>
        <Input
          label="First Name"
          value={userForm["firstName"]}
          setValue={(newValue) => {
            setFormValue("firstName", newValue);
          }}
        />
      </SignUpFormElement>
      <SignUpFormElement>
        <Input
          label="Last Name"
          value={userForm["lastName"]}
          setValue={(newValue) => {
            setFormValue("lastName", newValue);
          }}
        />
      </SignUpFormElement>
      <SignUpFormElement>
        <Dropdown
          label="Gender"
          options={genderOptions.map((option) => ({
            label: option,
            value: option,
          }))}
          currentOption={{
            label: userForm["gender"],
            value: userForm["gender"],
          }}
          setValue={(newOption) => {
            setFormValue("gender", newOption.value);
          }}
        />
      </SignUpFormElement>
      <SignUpFormElement>
        <Dropdown
          label="Language"
          options={languageOptions.map((option) => ({
            label: option,
            value: option,
          }))}
          currentOption={{
            label: userForm["language"],
            value: userForm["language"],
          }}
          setValue={(newOption) => {
            setFormValue("language", newOption.value);
          }}
        />
      </SignUpFormElement>
      <SignUpFormElement>
        <Input
          label="Phone Number"
          value={userForm["phoneNumber"]}
          setValue={(newValue) => {
            setFormValue("phoneNumber", newValue);
          }}
        />
      </SignUpFormElement>
      <SignUpFormSubmit>
        <Button
          text="Back"
          type="secondary"
          onClick={() => {
            history.push(appBasePath + "transver");
          }}
        />
        <Button
          text="Sign Up"
          onClick={() => {
            history.push(appBasePath + "login");
          }}
        />
      </SignUpFormSubmit>
    </SignUpContainer>
  );
}
export default SignUp;
