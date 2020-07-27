import Splash from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Splash", () => {
  it("should render correctly", () => {
    let SplashSnapshot = shallow(<Splash/>);
    expect(SplashSnapshot).toMatchSnapshot();
  });
});