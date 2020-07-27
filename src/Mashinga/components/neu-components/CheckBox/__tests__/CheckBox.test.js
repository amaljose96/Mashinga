import CheckBox from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("CheckBox", () => {
  it("should render correctly", () => {
    let CheckBoxSnapshot = shallow(<CheckBox/>);
    expect(CheckBoxSnapshot).toMatchSnapshot();
  });
});