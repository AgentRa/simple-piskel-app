import React, { useCallback, useRef, useState } from 'react';
import PreviewArea from './PreviewArea';
import PreviewSettings from './PreviewSettings';
import './index.scss';

const FramesPreview = () => {
  const [fpsInputValue, setFpsInputValue] = useState(10);
  const previewArea = useRef(null);


  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      previewArea.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, [previewArea]);

  return (
    <div className="preview-tools">
      <div className="frames-preview" ref={previewArea}>
        <PreviewArea fpsInputValue={fpsInputValue} />

        <PreviewSettings
          value={fpsInputValue}
          onInput={setFpsInputValue}
          onClick={toggleFullScreen}
        />
      </div>
    </div>
  );
};

export default FramesPreview;
