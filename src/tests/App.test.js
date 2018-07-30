import React from "react";
import App from "../App";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders without crashing", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      message: "This is a test"
    })
  );

  const renderer = new ShallowRenderer();
  renderer.render(<App />);

  const instance = renderer.getMountedInstance();
  await instance.componentDidMount();

  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
