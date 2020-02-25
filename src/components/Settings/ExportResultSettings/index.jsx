import React, { useCallback, useRef, useState } from 'react';
import GIFEncoder from 'gif-encoder-2';
import { useSelector } from 'react-redux';
import renderCanvas from '../../../utils/renderCanvas';
import createLink from '../../../utils/createLink';


const ExportResultSetting = () => {
  const pixelSize = useSelector((store) => store.framesControl.pixelSize);
  const frames = useSelector((store) => store.framesControl.frames);
  const [fps, setFps] = useState(12);
  const [gifBackgroundColor, setGifBackgroundColor] = useState('#969696');
  const [fileSize, setFileSize] = useState(64);
  const [fileName, setFileName] = useState('piskel-clone');
  const colorInput = useRef(null);
  const nameInput = useRef(null);
  const fpsInput = useRef(null);
  const sizeInput = useRef(null);

  const exportGif = useCallback(async () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const encoder = new GIFEncoder(fileSize, fileSize);
    const standardCanvasSize = 768;
    const currPixelSize = (fileSize / standardCanvasSize) * pixelSize;

    canvas.width = fileSize;
    canvas.height = fileSize;
    encoder.setDelay(1000 / fps);
    encoder.start();

    for (let i = 0; i < frames.length; i += 1) {
      context.fillStyle = gifBackgroundColor;
      context.fillRect(0, 0, fileSize, fileSize);
      renderCanvas(canvas, frames[i], currPixelSize, false);
      encoder.addFrame(context);
      context.clearRect(0, 0, fileSize, fileSize);
    }

    encoder.finish();

    const buffer = encoder.out.getData();
    const b64encoded = btoa(String.fromCharCode.apply(null, buffer));
    const datajpg = `data:image/jpg;base64,${b64encoded}`;
    const link = createLink(datajpg, fileName, 'gif');

    link.click();
  }, [frames, pixelSize, fileName, fileSize, fps, gifBackgroundColor]);


  return (
    <div className="settings-area">
      <span>
          Export
        {' '}
          .gif
      </span>

      <div className="export-field">
        File name:
        <input
          className="nameInput"
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          ref={nameInput}
        />
      </div>

      <div className="export-field">
        Gif background color:
        <button
          className="color-button"
          style={{ backgroundColor: gifBackgroundColor }}
          onClick={() => colorInput.current.click()}
          type="button"
        >
          <input
            className="color-input"
            type="color"
            onChange={(e) => setGifBackgroundColor(e.target.value)}
            ref={colorInput}
            value={gifBackgroundColor}
          />
        </button>
      </div>

      <div className="export-field">
        <span>
              FPS rate:
          {' '}
          {fps}
        </span>

        <input
          type="range"
          className="range-input"
          onChange={(e) => setFps(e.target.value)}
          value={fps}
          min="0"
          max="24"
          ref={fpsInput}
        />
      </div>

      <div className="export-field">
        <span>
              File dimensions:
          {' '}
          {fileSize}
          {' '}
              px
        </span>

        <input
          type="range"
          className="range-input"
          onChange={(e) => setFileSize(e.target.value)}
          value={fileSize}
          min="64"
          max="768"
          step="32"
          ref={sizeInput}
        />
      </div>

      <button
        className="export-button"
        type="button"
        onClick={exportGif}
      >
        Export .gif
      </button>
    </div>
  );
};

export default ExportResultSetting;
