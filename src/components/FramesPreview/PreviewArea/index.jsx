import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import renderCanvas from '../../../utils/renderCanvas';

const PreviewArea = ({ fpsInputValue }) => {
  const canvas = useRef(null);
  const frames = useSelector((store) => store.framesControl.frames);
  const pixelSize = useSelector((store) => store.framesControl.pixelSize);


  useEffect(() => {
    let x = 0;
    const interval = setInterval(() => {
      if (x >= frames.length) x = 0;
      renderCanvas(canvas.current, frames[x], pixelSize / 2);
      x++;
    }, 1000 / fpsInputValue);
    return () => clearInterval(interval);
  }, [frames, fpsInputValue, pixelSize]);


  return (
    <canvas
      className="preview-canvas"
      width={384}
      height={384}
      ref={canvas}
    />
  );
};

export default PreviewArea;
