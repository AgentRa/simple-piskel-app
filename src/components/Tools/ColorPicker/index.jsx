import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import hexToRGB from '../../../utils/hexToRGB';
import { swapColors, setMainColor, setSecondaryColor } from '../../../redux/Tools/toolActions';
import ColorButton from './ColorButton/ColorButton';


export default function ColorPicker() {
  const dispatch = useDispatch();
  const mainColor = useSelector((store) => store.tools.mainColor);
  const secondaryColor = useSelector((store) => store.tools.secondaryColor);

  const handleMainColorChange = (color) => {
    dispatch(setMainColor(color));
  };

  const handleSecondaryColorChange = (color) => {
    dispatch(setSecondaryColor(color));
  };

  return (
    <div className="color-picker">
      <ColorButton
        buttonClass="main color-button"
        id={0}
        color={mainColor}
        onChange={(value) => handleMainColorChange(hexToRGB(value))}
      />

      <ColorButton
        buttonClass="secondary color-button"
        id={1}
        color={secondaryColor}
        onChange={(value) => handleSecondaryColorChange(hexToRGB(value))}
      />

      <button
        onClick={() => dispatch(swapColors)}
        className="swap-color-button"
        type="button"
      >
        <FontAwesomeIcon icon={faSyncAlt} />
      </button>
    </div>
  );
}
