import React from "react";
import { Card, Divider, Header } from "semantic-ui-react";
import GuestModal from "./GuestModal";
import HostModal from "./HostModal";
import Logo from "./Logo";

const getGuestModal = (event, getUserData, status) => {
  return (
    <GuestModal
      key={event._id}
      event={event}
      status={status}
      getUserData={getUserData}
    />
  );
};

const getHostModal = (event, getUserData, status) => {
  return (
    <HostModal
      key={event._id}
      event={event}
      status={status}
      getUserData={getUserData}
    />
  );
};

const EOrganiser = props => {
  return (
    <div>
      <div className="float-right">
        <Logo />
      </div>
      <div className="eorganiser-container">
        <h2> Your Hosted Events</h2>
        {props.hostedEvents.length > 0 && (
          <Card.Group>
            {props.hostedEvents.map((event, index) => {
              return getHostModal(
                event,
                props.getUserData,
                props.hostedStatuses[index]
              );
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
                props.getUserData,
                props.invitedStatuses[index],
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
              return getGuestModal(event, props.invitedStatuses[index]);
            })}
          </Card.Group>
        )}
        {props.acceptedEvents.length === 0 && (
          <Header as="h2" textAlign="center" disabled>
            Soon ...
          </Header>
        )}
      </div>
    </div>
  );
};

export default EOrganiser;
