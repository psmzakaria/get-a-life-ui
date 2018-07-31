import React from "react";
import CreateEvent from "./../components/CreateEvent";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the book component of the app ", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<CreateEvent />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
