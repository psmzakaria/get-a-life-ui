import React from "react";
import Home from "./../components/Home";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders the home component of the app ", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Home />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
