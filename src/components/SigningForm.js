import React from "react";
import UserSignup from "./UserSignup";
import UserSignin from "./UserSignin";

const SigningForm = props => {
  return (
    <div>
      {props.componentToDisplay === "Signup" && (
        <UserSignup loadComponent={props.loadComponent} />
      )}
      {props.componentToDisplay === "Signin" && (
        <UserSignin loadComponent={props.loadComponent} />
      )}
    </div>
  );
};

export default SigningForm;
