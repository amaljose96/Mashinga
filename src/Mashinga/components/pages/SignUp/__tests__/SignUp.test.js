import SignUp from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("SignUp", () => {
  it("should render correctly", () => {
    let SignUpSnapshot = shallow(<SignUp/>);
    expect(SignUpSnapshot).toMatchSnapshot();
  });
});