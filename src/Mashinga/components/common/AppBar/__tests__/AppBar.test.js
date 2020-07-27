import AppBar from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("AppBar", () => {
  it("should render correctly", () => {
    let AppBarSnapshot = shallow(<AppBar/>);
    expect(AppBarSnapshot).toMatchSnapshot();
  });
});