import Input from "../index";
import { shallow } from "enzyme";
import React from "react";
describe("Input", () => {
  it("should render correctly", () => {
    let InputSnapshot = shallow(<Input />);
    expect(InputSnapshot).toMatchSnapshot();
  });
});
