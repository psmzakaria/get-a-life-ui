import React, { Component } from 'react';
import { Form, Modal, Card, Icon } from 'semantic-ui-react';
import { API_URL } from '../utils/configVar';
import CreateInvitationModal from './CreateInvitationModal';

class CreateEvent extends Component {
	constructor() {
		super();
		this.state = {
			formFields: {
				title: '',
				startDate: '',
				endDate: ''
			},
			modalOpen: false
		};
	}
	render() {
		return (
			<div>
				<Modal
					trigger={
						<div className="esnap-container-size">
							<Card onClick={this.handleOpen}>
								<div className="esnap-icon">
									<Icon name="add to calendar" size="huge" />
								</div>
								<Card.Content>
									<Card.Header>Create New Event</Card.Header>
								</Card.Content>
							</Card>
						</div>
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
										onChange={(event) => this.handleChange(event, 'title')}
									/>
								</Form.Field>
								<Form.Field>
									<label>Start Date</label>
									<input
										id="start"
										placeholder="DD/MM/YYYY"
										value={this.state.formFields.startDate}
										onChange={(event) => this.handleChange(event, 'startDate')}
									/>
								</Form.Field>
								<Form.Field>
									<label>End Date</label>
									<input
										id="end"
										placeholder="DD/MM/YYYY"
										value={this.state.formFields.endDate}
										onChange={(event) => this.handleChange(event, 'endDate')}
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
    console.log("invitees", invitees)
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
