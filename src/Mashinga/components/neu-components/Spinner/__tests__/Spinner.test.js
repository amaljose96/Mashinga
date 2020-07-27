import Spinner from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Spinner", () => {
  it("should render correctly", () => {
    let SpinnerSnapshot = shallow(<Spinner/>);
    expect(SpinnerSnapshot).toMatchSnapshot();
  });
});