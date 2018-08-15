import React from "react";
import EventCard from "../components/EventCard";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders the create component of the app ", () => {
  const renderer = new ShallowRenderer();
  const event = {
    title: "birthday",
    hostId: {
      username: "lala"
    },
    proposedDates: ["20180813", "20180814", "20180815"]
  };
  const status = "Pending";

  renderer.render(<EventCard event={event} status={status} />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
