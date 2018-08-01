import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import SignInButton from "./../components/SignInButton";

it("should render the sign in button", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SignInButton />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
