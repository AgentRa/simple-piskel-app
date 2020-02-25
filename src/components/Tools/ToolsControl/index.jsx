import React from 'react';
import {
  faPen, faFillDrip, faEraser, faThumbtack, faFill,
} from '@fortawesome/free-solid-svg-icons';
import key from 'weak-key';
import toolNames from '../../../constants/ToolNames';
import ToolButton from './ToolsButton/ToolButton';

export default function ToolsControl() {
  const Icons = [faPen, faEraser, faFillDrip, faThumbtack, faFill];

  return (
    <div className="tools-controle">
      {
        Icons.map((item, i) => (
          <ToolButton
            key={key(item)}
            icon={item}
            id={toolNames[i]}
          />
        ))
      }
    </div>
  );
}
