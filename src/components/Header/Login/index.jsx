import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import GoogleKey from '../../../constants/GoogleKey';


export default function Login({ login }) {
  return (
    <GoogleLogin
      clientId={GoogleKey}
      buttonText="Login"
      onSuccess={login}
      cookiePolicy="single_host_origin"
      render={(renderProps) => (
        <button
          className="login-button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          type="button"
        >
          <FontAwesomeIcon icon={faGoogle} />
          {'  '}
          Sign in
        </button>
      )}
    />
  );
}
