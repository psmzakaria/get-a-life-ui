import React from "react";
import { Card, Divider, Header } from "semantic-ui-react";
import GuestModal from "./GuestModal";
import HostModal from "./HostModal";
import Logo from "./Logo";

const getGuestModal = (event, status) => {
  return <GuestModal key={event._id} event={event} status={status} />;
};

const getHostModal = (event, status) => {
  return <HostModal key={event._id} event={event} status={status} />;
};

const EOrganiser = props => {
  return (
    <div className="eorganiser-container">
      <Logo />
      <h2> Your Hosted Events</h2>
      {props.hostedEvents.length > 0 && (
        <Card.Group>
          {props.hostedEvents.map((event, index) => {
            return getHostModal(event, props.statuses[index]);
          })}
        </Card.Group>
      )}
      {props.hostedEvents.length === 0 && (
        <Header as="h2" textAlign="center" disabled>
          You have no hosted events
        </Header>
      )}
      <Divider />
      <h2> Your Invited Events</h2>
      {props.invitedEvents.length > 0 && (
        <Card.Group>
          {props.invitedEvents.map((event, index) => {
            return getGuestModal(
              event,
              props.statuses[index],
              props.getUserData,
              props.username
            );
          })}
        </Card.Group>
      )}
      {props.invitedEvents.length === 0 && (
        <Header as="h2" textAlign="center" disabled>
          You have been invited
        </Header>
      )}
      <Divider />
      <h2> You have a life</h2>
      {props.acceptedEvents.length > 0 && (
        <Card.Group>
          {props.acceptedEvents.map((event, index) => {
            return getGuestModal(event, props.statuses[index]);
          })}
        </Card.Group>
      )}
      {props.acceptedEvents.length === 0 && (
        <Header as="h2" textAlign="center" disabled>
          Soon ...
        </Header>
      )}
    </div>
  );
};

export default EOrganiser;
