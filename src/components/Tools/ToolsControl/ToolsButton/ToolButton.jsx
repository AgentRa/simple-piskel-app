import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setActiveToolId } from '../../../../redux/Tools/toolActions';

export default function ToolButton({ id, icon }) {
  const dispatch = useDispatch();
  const activeToolId = useSelector((store) => store.tools.activeToolId);

  return (
    <button
      className={`${id === activeToolId ? 'active' : null} tool-button`}
      onClick={() => dispatch(setActiveToolId(id))}
      type="button"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
