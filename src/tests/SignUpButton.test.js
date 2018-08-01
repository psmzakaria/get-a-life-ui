import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import SignUpButton from "./../components/SignUpButton";

it("should render the sign up button ", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SignUpButton />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
