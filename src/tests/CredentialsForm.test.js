import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import CredentialsForm from "./../components/CredentialsForm";

it("should render the sign in button", () => {
  const state = {
    componentToDisplay: "Sign Up",
    signUpError: {
      hidden: true,
      header: "",
      content: ""
    },
    signInError: {
      hidden: true,
      header: "",
      content: ""
    },
    username: "",
    password: ""
  };

  const renderer = new ShallowRenderer();
  renderer.render(<CredentialsForm state={state} />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
