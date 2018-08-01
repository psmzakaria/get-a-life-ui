import React, { Component } from 'react';
import { Button, Form, Divider } from 'semantic-ui-react';
import { API_URL } from '../utils/configVar';

class UserSignin extends Component {
	constructor() {
		super();
		this.state = {
			formFields: {
				username: '',
				password: ''
			}
		};
	}
	render() {
		return (
			<div className="ui inverted segment">
				<div className="ui inverted form">
					<h1>Sign In Page</h1>
					<Form>
						<Form.Field>
							<label>Username</label>
							<input
								placeholder="Username"
								value={this.state.formFields.username}
								onChange={(event) => this.handleChange(event, 'username')}
							/>
						</Form.Field>
						<Form.Field>
							<label>Password</label>
							<input
								placeholder="Password"
								value={this.state.formFields.password}
								onChange={(event) => this.handleChange(event, 'password')}
							/>
						</Form.Field>
						<Button fluid color="blue" type="submit" onClick={this.handleSubmit}>
							Sign In
						</Button>
					</Form>
					<Divider />
					<div>
						<p className="text-align-center">
							Don't have an account?
							<a className="cursor-pointer" onClick={() => this.props.loadComponent('Signup')}>
								{` `} Sign Up Here
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
	handleChange = (event, propertyName) => {
		const formFields = this.state.formFields;
		formFields[propertyName] = event.target.value;
		this.setState({
			formFields: formFields
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();

		fetch(`${API_URL}/users/signin`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.state.formFields.username,
				password: this.state.formFields.password
			})
		});
	};
}

export default UserSignin;
