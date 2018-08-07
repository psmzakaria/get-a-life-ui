import React from "react";
import ESnap from "./../components/ESnap";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the create component of the app ", () => {
  const renderer = new ShallowRenderer();
  const event = {
    title: "birthday",
    hostId: {
      username: "lala"
    },
    proposedDates: []
  };

  renderer.render(<ESnap key={1} event={event} />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
