import Modal from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Modal", () => {
  it("should render correctly", () => {
    let ModalSnapshot = shallow(<Modal/>);
    expect(ModalSnapshot).toMatchSnapshot();
  });
});