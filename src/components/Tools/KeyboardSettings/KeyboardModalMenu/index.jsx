import React, {
  useState, useCallback, useRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen, faEraser, faFillDrip, faThumbtack, faFill, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import key from 'weak-key';
import { useSelector } from 'react-redux';
import { changeButtonsConfig } from '../../../../redux/Tools/toolActions';
import KeyboardSettingsButton from './KeyboardSettingsButton';
import toolNames from '../../../../constants/ToolNames';


const KeyboardModalMenu = ({ toggleMenuStatus }) => {
  const buttonsConfiguration = useSelector((store) => store.tools.buttonsConfiguration);

  const [activeKeyButton, setActiveKeyButton] = useState('');
  const keyboardSettingsWindow = useRef();


  const handleClick = useCallback((id, event) => {
    event.stopPropagation();

    keyboardSettingsWindow.current.onkeydown = (e) => {
      e.stopPropagation();
      const letter = e.code.slice(3, 5).toUpperCase();
      const index = toolNames.indexOf(id);
      const index2 = buttonsConfiguration.indexOf(letter);
      if (index2 + 1) buttonsConfiguration[index2] = null;

      buttonsConfiguration[index] = letter;
      changeButtonsConfig(buttonsConfiguration);
      setActiveKeyButton('');

      keyboardSettingsWindow.current.onkeydown = null;
    };

    setActiveKeyButton(id);
  }, [buttonsConfiguration]);


  const icons = [faPen, faEraser, faFillDrip, faThumbtack, faFill];

  return (
    <div className="keyboard-settings-window" ref={keyboardSettingsWindow}>
      {icons.map((icon, i) => (
        <KeyboardSettingsButton
          code={buttonsConfiguration[i]}
          handleClick={handleClick}
          icon={icon}
          key={key(icon)}
          id={toolNames[i]}
          activeKeyButton={activeKeyButton}
        />
      ))}

      <button
        className="exit-button"
        onClick={toggleMenuStatus}
        type="button"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};


export default KeyboardModalMenu;
