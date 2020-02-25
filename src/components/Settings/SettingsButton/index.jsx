import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SettingsButton({
  icon,
  onClick,
  id,
  activeSettingButton,
}) {
  return (
    <button
      className={`${activeSettingButton === id ? 'active ' : ''}settings-button`}
      onClick={(e) => onClick(id, e)}
      type="button"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
