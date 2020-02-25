import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function KeyboardSettingsButton({
  id,
  code,
  handleClick,
  icon,
  activeKeyButton,
}) {
  return (
    <div
      className="keyboard-settings-button"
    >
      <FontAwesomeIcon icon={icon} />

      <button
        className={`${activeKeyButton === id ? 'active ' : ''}key-button`}
        onClick={(e) => handleClick(id, e)}
        type="button"
      >
        {code}
      </button>

    </div>
  );
}
