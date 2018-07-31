import React from "react";
import UserSignin from "./../components/UserSignin";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the sign in page", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<UserSignin />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
