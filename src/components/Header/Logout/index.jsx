import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Logout({ logout, userName, userImg }) {
  return (
    <div className="logout-container">
      <div className="logout-button-container">
        <span>
          Привет,
          {' '}
          {userName}
        </span>

        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={logout}
          render={(renderProps) => (
            <button
              className="logout-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              type="button"
            >
              <FontAwesomeIcon icon={faGoogle} />
              {'  '}
              Sign out
            </button>
          )}
        />
      </div>

      <img src={userImg} alt={userName} width="50" height="50" />
    </div>
  );
}
