import React, { useEffect, useRef } from 'react';
import key from 'weak-key';
import Frame from './Frame';
import AddFrameButton from './AddFrameButton';
import { replaceFrame, createFrame } from '../../redux/FramesControl/framesControlActions';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';


const FramesControl = () => {
  const dropZone = useRef(null);
  const dispatch = useDispatch();
  const frames = useSelector((store) => store.framesControl.frames);
  const activeFrameId = useSelector((store) => store.framesControl.activeFrameId);


  useEffect(() => {
    let startId;

    dropZone.current.ondragstart = (event) => {
      startId = event.target.getAttribute('id');
    };

    dropZone.current.ondragenter = (event) => {
      if (event.target.parentElement.classList.contains('frame')) {
        event.target.parentElement.classList.add('drag-hovered');
      }
    };

    dropZone.current.ondragleave = (event) => {
      if (event.target.parentElement.classList.contains('frame')) {
        event.target.parentElement.classList.remove('drag-hovered');
      }
    };

    dropZone.current.ondragover = (e) => e.preventDefault();

    dropZone.current.ondrop = (event) => {
      const targetId = event.target.getAttribute('id');

      event.preventDefault();
      event.target.parentElement.classList.remove('drag-hovered');
      if (startId === targetId) return;
      dispatch(replaceFrame(startId, targetId));
    };
  }, [dispatch]);

  return (
    <div
      className="frames-control"
      ref={dropZone}
    >
      {frames.map((frame, i) => (
        <Frame
          key={key(frame)}
          id={i}
          frames={frames}
          active={activeFrameId === i}
        />
      ))}

      <AddFrameButton
        onClick={() => dispatch(createFrame)}
      />
    </div>
  );
};

export default FramesControl;
