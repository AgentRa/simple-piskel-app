import React, { useState, useCallback } from 'react';
import OpenKeyboardMenuButton from './OpenKeyboardMenuButton';
import KeyboardModalMenu from './KeyboardModalMenu';


const KeyboardSettings = () => {
  const [isModalActive, setModalActive] = useState(false);


  const toggleMenuStatus = useCallback(() => {
    setModalActive(!isModalActive);
  }, [setModalActive, isModalActive]);


  return (
    <div className="keyboard-settings">
      <OpenKeyboardMenuButton toggleMenuStatus={toggleMenuStatus} />
      { isModalActive && <KeyboardModalMenu toggleMenuStatus={toggleMenuStatus} /> }
    </div>
  );
};

export default KeyboardSettings;
