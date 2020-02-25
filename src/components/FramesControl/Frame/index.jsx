import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CopyButton from '../CopyButton';
import DeleteButton from '../DeleteButton';
import renderCanvas from '../../../utils/renderCanvas';
import { deleteFrame, copyFrame, changeActiveFrameId } from '../../../redux/FramesControl/framesControlActions';


const Frame = ({ id, frames, active }) => {
  const canvas = useRef(null);
  const dispatch = useDispatch();
  const pixelSize = useSelector((store) => store.framesControl.pixelSize);

  const animateFrames = useCallback(() => {
    const frame = frames[id];
    renderCanvas(canvas.current, frame, pixelSize / 4);
  }, [id, frames, pixelSize, canvas]);

  useEffect(() => {
    animateFrames();
  });

  const handleCopyFrame = useCallback((id, e) => {
    e.stopPropagation();
    dispatch(copyFrame(id));
  }, [dispatch]);

  const handleDeleteFrame = useCallback((id, e) => {
    e.stopPropagation();
    dispatch(deleteFrame(id));
  }, [dispatch]);


  return (
    <div
      className={`${active ? 'active' : ''} frame`}
      onClick={() => dispatch(changeActiveFrameId(id))}
      role="presentation"
      draggable="true"
      id={id}
    >
      <canvas
        width="192"
        height="192"
        id={id}
        ref={canvas}
      />

      <div className="frame-count">{id + 1}</div>

      {frames.length > 1 && <DeleteButton onClick={(e) => handleDeleteFrame(id, e)} />}

      <CopyButton onClick={(e) => handleCopyFrame(id, e)} />

    </div>
  );
};

export default Frame;
