import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ESnap from "./ESnap";

const getESnap = (event, status) => {
  return <ESnap key={event._id} event={event} status={status} />;
};

const EOrganiser = props => {
  return (
    <div className="eorganiser-container">
      <h2> Your Hosted Events</h2>
      <Card.Group>
        {props.hostedEvents.map((event, index) => {
          return getESnap(event, props.statuses[index]);
        })}
      </Card.Group>
      <Divider />
      <h2> Your Invited Events</h2>
      <Card.Group>
        {props.invitedEvents.map((event, index) => {
          return getESnap(event, props.statuses[index]);
        })}
      </Card.Group>
      <Divider />
      <h2> You have a life</h2>
    </div>
  );
};

export default EOrganiser;
