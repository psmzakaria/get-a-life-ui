import _ from "lodash";
import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";
import SearchUsernameBar from "./SearchUsernameBar";
import InvitationList from "./InvitationList";

class CreateInvitationModal extends Component {
  constructor() {
    super();
    this.state = {
      formUsername: "",
      open: false,
      usernames: [], // changed to [{title: , userid: }]
      invitees: [], // changed this to [{username: , userid: }]
      isLoading: false,
      results: [],
      value: ""
    };
  }

  getUserData = async () => {
    const response = await fetch(`${API_URL}/users/all`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const userData = await response.json();
      const usernames = [];
      userData.allUsernames.forEach(nameObject =>
        usernames.push({
          title: nameObject.username,
          userid: nameObject._id
        })
      );

      this.setState({
        usernames
      });
    }
  };

  componentWillMount = () => {
    this.resetComponent();
    this.getUserData();
  };

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) => {
    const inviteeData = { username: result.title, userid: result.userid };

    this.setState({
      value: result.title,
      invitees: [...this.state.invitees, inviteeData]
    });
    this.resetComponent();
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.usernames, isMatch)
      });
    }, 300);
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  handleChange = event => {
    this.setState({
      formUsername: event.target.value
    });
  };

  handleDeleteFromList = (event, userToRemove) => {
    const indexToRemove = this.state.invitees.indexOf(userToRemove);
    this.setState({
      invitees: [
        ...this.state.invitees.slice(0, indexToRemove),
        ...this.state.invitees.slice(indexToRemove + 1)
      ]
    });
  };

  handleSubmitInvitees = e => {
    if (this.state.invitees.length === 0) {
      alert("Please add invitees");
    } else {
      return this.props.handleSubmit(e, this.state.invitees);
    }
  };

  render() {
    return (
      <Modal
        onOpen={this.open}
        onClose={this.close}
        size="small"
        trigger={
          <Button primary icon>
            Invite Friends! <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Invitation List</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <SearchUsernameBar
              handleSearchChange={this.handleSearchChange}
              handleResultSelect={this.handleResultSelect}
              isLoading={this.state.isLoading}
              results={this.state.results}
              value={this.state.value}
            />
            <InvitationList
              invitees={this.state.invitees}
              handleDeleteFromList={this.handleDeleteFromList}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            icon="check"
            content="All Done"
            onClick={this.handleSubmitInvitees}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CreateInvitationModal;
