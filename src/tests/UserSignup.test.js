import React from "react";
import UserSignup from "./../components/UserSignup";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the sign up page ", () => {
  const state = {
    hideError: true,
    errorHeader: "",
    errorContent: "",
    username: "",
    password: ""
  };

  const renderer = new ShallowRenderer();
  renderer.render(<UserSignup state={state} />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
