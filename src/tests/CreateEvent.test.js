import React from "react";
import CreateEvent from "./../components/CreateEvent";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the create component of the app ", () => {
  const renderer = new ShallowRenderer();
  const formFields = {
    title: "",
    startDate: "",
    endDate: ""
  };

  renderer.render(<CreateEvent formFields={formFields} />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
