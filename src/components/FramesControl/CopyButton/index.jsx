import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CopyButton = ({ onClick }) => (
  <button
    className="frame-copy"
    onClick={onClick}
    type="button"
  >
    <FontAwesomeIcon icon={faCopy} />
  </button>
);

export default CopyButton;
