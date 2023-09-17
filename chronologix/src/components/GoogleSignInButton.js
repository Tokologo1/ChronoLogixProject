// GoogleSignInButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './GoogleSignInButton.css';

const GoogleSignInButton = ({ onGoogleSignIn }) => {
  const responseGoogle = (response) => {
    // Handle the Google sign-in response
    onGoogleSignIn(response);
  };

  return (
    <>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="google-sign-in-button"
      />
    </>
  );
};

export default GoogleSignInButton;
