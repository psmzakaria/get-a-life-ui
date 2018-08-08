import React, { Component } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";
import CreateInvitationModal from "./CreateInvitationModal";

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      formFields: {
        title: "",
        startDate: "",
        endDate: ""
      },
      modalOpen: false
    };
  }
  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button animated="vertical" color="olive" onClick={this.handleOpen}>
              <Button.Content hidden>Host Your Event</Button.Content>
              <Button.Content visible>
                <Icon.Group onClick={this.handleOpen} size="large">
                  <Icon loading size="big" name="circle notch" />
                  <Icon name="calendar alternate" />
                </Icon.Group>
              </Button.Content>
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          closeIcon
        >
          <Modal.Header>Create Your Event</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <Form>
                <Form.Field>
                  <label>Title</label>
                  <input
                    id="title"
                    placeholder="Title of the event"
                    value={this.state.formFields.title}
                    onChange={event => this.handleChange(event, "title")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Start Date</label>
                  <input
                    id="start"
                    placeholder="DD/MM/YYYY"
                    value={this.state.formFields.startDate}
                    onChange={event => this.handleChange(event, "startDate")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>End Date</label>
                  <input
                    id="end"
                    placeholder="DD/MM/YYYY"
                    value={this.state.formFields.endDate}
                    onChange={event => this.handleChange(event, "endDate")}
                  />
                </Form.Field>
                {/* <Button type="submit" onClick={this.handleSubmit}>
									Submit
								</Button> */}
							</Form>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<CreateInvitationModal handleSubmit={this.handleSubmit}/>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
	handleOpen = () => this.setState({ modalOpen: true });
	handleClose = () => this.setState({ modalOpen: false });
	handleChange = (event, propertyName) => {
		const formFields = this.state.formFields;
		formFields[propertyName] = event.target.value;
		this.setState({
			formFields: formFields
		});
	};
	handleSubmit = (event,invitees) => {
		event.preventDefault();
		this.setState({
			modalOpen: false
		});

		fetch(`${API_URL}/events/create`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: this.state.formFields.title,
				startDate: this.state.formFields.startDate,
				endDate: this.state.formFields.endDate,
				attendees: invitees 
			})
		});
	};
}

export default CreateEvent;
