import TextArea from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("TextArea", () => {
  it("should render correctly", () => {
    let TextAreaSnapshot = shallow(<TextArea/>);
    expect(TextAreaSnapshot).toMatchSnapshot();
  });
});