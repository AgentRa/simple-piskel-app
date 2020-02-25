import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddFrameButton = ({ onClick }) => (
  <button
    className="add-frame-button"
    onClick={onClick}
    type="button"
  >
    <FontAwesomeIcon icon={faPlus} />
      Add frame
  </button>
);

export default AddFrameButton;
