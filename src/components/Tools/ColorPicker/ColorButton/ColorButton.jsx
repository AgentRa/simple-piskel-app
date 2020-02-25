import React, { useRef } from 'react';

const ColorButton = ({ buttonClass, onChange, color }) => {
  const input = useRef(null);

  return (
    <button
      className={buttonClass}
      style={{ backgroundColor: `rgba(${color.join()})` }}
      onClick={() => input.current.click()}
      type="button"
    >
      <input
        type="color"
        onChange={() => onChange(input.current.value)}
        ref={input}
      />
    </button>
  );
};

export default ColorButton;
