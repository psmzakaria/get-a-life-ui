import React from "react";
import UserSignup from "./../components/UserSignup";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the book component of the app ", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<UserSignup />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
