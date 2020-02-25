import React, { useCallback, useRef, useState } from 'react';
import './index.scss';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import key from 'weak-key';
import CanvasSizeSettings from './CanvasSizeSettings';
import ExportResultSettings from './ExportResultSettings';
import SettingsButton from './SettingsButton';


const Settings = () => {
  const settings = useRef(null);
  const [activeSettingButton, setActiveSettingButton] = useState(0);

  const openMenu = useCallback((id, e) => {
    e.stopPropagation();
    settings.current.classList.add('activeMenu');

    setActiveSettingButton(id);
  }, []);

  const closeMenu = useCallback(() => {
    settings.current.classList.remove('activeMenu');
  }, []);

  const icons = [faCog, faSave];

  return (
    <div
      className="settings"
      ref={settings}
    >
      <div className="buttons-container">
        {icons.map((item, i) => (
          <SettingsButton
            icon={item}
            activeSettingButton={activeSettingButton}
            id={i}
            key={key(item)}
            onClick={openMenu}
          />
        ))}
      </div>

      {activeSettingButton === 0 && <CanvasSizeSettings />}
      {activeSettingButton === 1 && <ExportResultSettings />}


      <button
        className="exit-menu-button"
        onClick={closeMenu}
        type="button"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default Settings;
