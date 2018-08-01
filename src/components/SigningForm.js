import React from "react";
import UserSignup from "./UserSignup";
import UserSignin from "./UserSignin";

const SigningForm = props => {
  return (
    <div>
      {props.state.componentToDisplay === "Signup" && (
        <UserSignup
          loadComponent={props.loadComponent}
          handleOnChange={props.handleOnChange}
          handleSubmit={props.handleSignUpSubmit}
          email={props.state.email}
          username={props.state.username}
          password={props.state.password}
        />
      )}
      {props.state.componentToDisplay === "Signin" && (
        <UserSignin
          loadComponent={props.loadComponent}
          handleOnChange={props.handleOnChange}
          handleSubmit={props.handleSignInSubmit}
          username={props.state.username}
          password={props.state.password}
        />
      )}
    </div>
  );
};

export default SigningForm;
