import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import './index.scss';

const Header = () => {
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);

  const login = useCallback((response) => {
    const { givenName, imageUrl } = response.profileObj;
    setUserImage(imageUrl);
    setUserName(givenName);
  }, []);

  const logout = useCallback(() => {
    setUserName(null);
    setUserImage(null);
  }, [setUserName, setUserImage]);


  return (
    <div className="app-header">
      <Link to="/">
        <button
          className="piskel-button"
          type="button"
        >
          <h1>Piskel</h1>
        </button>
      </Link>

      <div className="header-buttons-container">
        {!userName && <Login login={login} />}
        {userName && <Logout userName={userName} userImg={userImage} logout={logout} />}
      </div>
    </div>
  );
};

export default Header;
