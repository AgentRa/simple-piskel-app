import React, { useEffect } from 'react';
import ToolsControl from './ToolsControl';
import ColorPicker from './ColorPicker';
import KeyboardSettings from './KeyboardSettings';
import './index.scss';
import ToolNames from '../../constants/ToolNames';
import { setActiveToolId } from '../../redux/Tools/toolActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Tools() {
  const buttonsConfiguration = useSelector((store) => store.tools.buttonsConfiguration);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.onkeydown = (e) => {
      const letter = e.code.slice(3, 5).toUpperCase();
      const index = buttonsConfiguration.indexOf(letter);

      if (!(index + 1)) return;
      const id = ToolNames[index];
      dispatch(setActiveToolId(id));
    };
  }, [buttonsConfiguration, dispatch]);

  return (
    <div className="tools">
      <ToolsControl />
      <ColorPicker />
      <KeyboardSettings />
    </div>
  );
}
