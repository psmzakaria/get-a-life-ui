import _ from 'lodash';
import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import { API_URL } from '../utils/configVar';
import SearchUsernameBar from './SearchUsernameBar';
import InvitationList from './InvitationList';
// import { timingSafeEqual } from 'crypto';

class CreateInvitationModal extends Component {
	constructor() {
		super();
		this.state = {
			formUsername: '',
			open: false,
			usernames: [],
			invitees: [],
			isLoading: false,
			results: [],
			value: ''
		};
	}

	getUserData = async () => {
		const response = await fetch(`${API_URL}/users/all`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			const userData = await response.json();
			const usernames = [];
			userData.allUsernames.forEach((nameObject) => usernames.push({ title: nameObject.username }));

			this.setState({
				usernames
			});
		}
	};

	componentWillMount = () => {
		this.resetComponent();
		this.getUserData();
	};

	resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

	handleResultSelect = (e, { result }) => {
		this.setState({
			value: result.title,
			invitees: [ ...this.state.invitees, result.title ]
		});
		this.resetComponent();
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
			const isMatch = (result) => re.test(result.title);

			this.setState({
				isLoading: false,
				results: _.filter(this.state.usernames, isMatch)
			});
		}, 300);
	};

	open = () => this.setState({ open: true });
	close = () => this.setState({ open: false });

	handleChange = (event) => {
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
  
  handleSubmitTest = (e) => {
    return this.props.handleSubmit(e,this.state.invitees)
  }

	// handleSendInvitees = (event) => {
	//   event.preventDefault();
	//   this.close()
	// 	// this.setState({
	// 	// 	open: false
	// 	// });

	// 	fetch(`${API_URL}/events/create`, {
	// 		method: 'POST',
	// 		credentials: 'include',
	// 		headers: {
	// 			Accept: 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			title: this.state.formFields.title,
	// 			startDate: this.state.formFields.startDate,
	// 			endDate: this.state.formFields.endDate
	// 		})
	// 	});
	// };

	render() {
		return (
			<Modal
				// open={open}
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
					<Button icon="check" content="All Done" onClick={this.handleSubmitTest} />
				</Modal.Actions>
			</Modal>
		);
	}
}

export default CreateInvitationModal;
