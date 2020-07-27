import Profile from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Profile", () => {
  it("should render correctly", () => {
    let ProfileSnapshot = shallow(<Profile/>);
    expect(ProfileSnapshot).toMatchSnapshot();
  });
});