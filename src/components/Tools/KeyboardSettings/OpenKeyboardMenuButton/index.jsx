import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';


export default function OpenKeyboardMenuButton({ toggleMenuStatus }) {
  return (
    <button
      className="open-keyboard-menu-button"
      onClick={toggleMenuStatus}
      type="button"
    >
      <FontAwesomeIcon icon={faKeyboard} />
    </button>
  );
}
