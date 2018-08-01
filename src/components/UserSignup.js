import React from "react";
import { Button, Checkbox, Form, Divider } from "semantic-ui-react";

const UserSignup = props => (
  <div className="ui inverted segment">
    <div className="ui inverted form">
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button fluid color='blue' type="submit">Submit</Button>
      </Form>
      <Divider />
      <div>
        <p className="text-align-center">
          Have an account?

          <a className="cursor-pointer"
            onClick={() => props.loadComponent("Signin")}
          >
            {` `} Sign In Here
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default UserSignup;
