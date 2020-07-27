import Transver from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Transver", () => {
  it("should render correctly", () => {
    let TransverSnapshot = shallow(<Transver/>);
    expect(TransverSnapshot).toMatchSnapshot();
  });
});