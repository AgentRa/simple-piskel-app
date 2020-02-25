import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCanvasSize } from '../../../redux/FramesControl/framesControlActions';

export default function CanvasSizeSettings() {
  const dispatch = useDispatch();

  return (
    <div className="settings-area">
      <button
        className="settings-button"
        onClick={() => dispatch(changeCanvasSize(32))}
        type="button"
      >
        32x32
      </button>

      <button
        className="settings-button"
        onClick={() => dispatch(changeCanvasSize(64))}
        type="button"
      >
        64x64
      </button>

      <button
        className="settings-button"
        onClick={() => dispatch(changeCanvasSize(128))}
        type="button"
      >
        128x128
      </button>
    </div>
  );
}
