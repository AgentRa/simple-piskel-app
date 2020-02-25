import React, { useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons';


const PreviewSettings = (
  {
    onInput,
    onClick,
    value,
  },
) => {
  const input = useRef(null);

  const getInputValue = useCallback(() => {
    if (input) {
      onInput(input.current.value);
    }
  }, [onInput]);

  return (
    <div className="preview-setings">
      <span className="fps-count">
        { value }
        {' '}
        FPS
      </span>

      <input
        type="range"
        className="fps-input"
        value={value}
        onChange={getInputValue}
        min="1"
        max="24"
        ref={input}
      />

      <button
        onClick={onClick}
        className="full-screen-button"
        type="button"
      >
        <FontAwesomeIcon icon={faCompress} />
      </button>
    </div>
  );
};

export default PreviewSettings;
