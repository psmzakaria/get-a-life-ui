import React from "react";
import EOrganiser from "./../components/EOrganiser";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the create component of the app ", () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <EOrganiser hostedEvents={[]} statuses={[]} invitedEvents={[]} />
  );
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
