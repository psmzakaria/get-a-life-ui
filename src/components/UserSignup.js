import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import SigninButton from "./SigninButton";
const UserSignup = () => (
  <div class="ui inverted segment">
    <div class="ui inverted form">
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
        <Button type="submit">Submit</Button>
      </Form>
      <div>
        <p> Have an account already?</p>
        <SigninButton />
      </div>
    </div>
  </div>
);

export default UserSignup;
