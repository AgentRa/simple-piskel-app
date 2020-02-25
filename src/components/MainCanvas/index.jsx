import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import renderCanvas from '../../utils/renderCanvas';
import makeCopy from '../../utils/makeCopy';
import bucketFunction from '../../utils/bucketFunction';
import lineDraw from '../../utils/lineDraw';
import paintAllPixels from '../../utils/paintAllPixels';
import getCoordinates from '../../utils/getCoordinates';
import { changeFrame } from '../../redux/FramesControl/framesControlActions';
import './index.scss';


const MainCanvas = () => {
  const canvas = useRef(null);
  const dispatch = useDispatch();

  const {
    activeToolId,
    frame,
    pixelSize,
    mainColor,
    secondaryColor,
  } = useSelector((store) => ({
    activeToolId: store.tools.activeToolId,
    frame: store.framesControl.frames[store.framesControl.activeFrameId],
    pixelSize: store.framesControl.pixelSize,
    mainColor: store.tools.mainColor,
    secondaryColor: store.tools.secondaryColor,
  }));

  useEffect(() => {
    renderCanvas(canvas.current, frame, pixelSize);
  });


  const chooseToolFunction = (e) => {
    switch (activeToolId) {
      case 'pen':
      case 'eraser':
        penOrEraser(e);
        break;
      case 'paintBucket':
        bucket(e);
        break;
      case 'stroke':
        stroke(e);
        break;
      case 'paintAllPixels':
        paintAllPixelsToSameColor(e);
        break;
      default:
        break;
    }
  };

  const stroke = useCallback((event) => {
    const color = event.nativeEvent.which === 3 ? secondaryColor : mainColor;
    const startCoords = getCoordinates(event, pixelSize);
    let clone = makeCopy(frame);

    lineDraw(clone, color, startCoords.x, startCoords.y, startCoords.x, startCoords.y);
    renderCanvas(canvas.current, frame, pixelSize);

    canvas.current.onmousemove = (e) => {
      const startFrame = makeCopy(frame);
      const currCoords = getCoordinates(e, pixelSize);

      clone = lineDraw(startFrame, color, startCoords.x, startCoords.y, currCoords.x, currCoords.y);
      renderCanvas(canvas.current, clone, pixelSize);
    };

    canvas.current.onmouseup = () => {
      canvas.current.onmousemove = null;
      canvas.current.onmouseup = null;
      dispatch(changeFrame(clone));
    };
  }, [secondaryColor, mainColor, pixelSize, frame, dispatch]);


  const paintAllPixelsToSameColor = useCallback((event) => {
    const color = event.nativeEvent.which === 3 ? secondaryColor : mainColor;
    const clone = paintAllPixels(frame, color);


    dispatch(changeFrame(clone));
  }, [secondaryColor, mainColor, frame, dispatch]);

  const bucket = useCallback((e) => {
    const colorRGBA = e.nativeEvent.which === 3 ? secondaryColor : mainColor;
    const clone = bucketFunction(frame, colorRGBA, pixelSize, e.nativeEvent);

    dispatch(changeFrame(clone));
  }, [secondaryColor, mainColor, frame, pixelSize, dispatch]);


  const penOrEraser = useCallback((event) => {
    const coords = getCoordinates(event, pixelSize);
    const coordinates = [coords.x, coords.y];
    let color = event.nativeEvent.which === 3 ? secondaryColor : mainColor;
    if (activeToolId === 'eraser') {
      color = undefined;
    }
    let clone = lineDraw(frame, color, coords.x, coords.y, coords.x, coords.y);

    renderCanvas(canvas.current, clone, pixelSize);

    canvas.current.onmousemove = (e) => {
      const currentCoords = getCoordinates(e, pixelSize);

      coordinates.push(currentCoords.x, currentCoords.y);
      if (coordinates.length > 4) coordinates.splice(0, 2);

      clone = lineDraw(clone, color, ...coordinates);
      renderCanvas(canvas.current, clone, pixelSize);
    };

    canvas.current.onmouseup = () => {
      canvas.current.onmousemove = null;
      canvas.current.onmouseup = null;
      dispatch(changeFrame(clone));
    };
  }, [pixelSize, secondaryColor, mainColor, activeToolId, frame, dispatch]);


  return (
    <div className="main-canvas">
      <div className="main-canvas-container">
        <canvas
          onMouseDown={chooseToolFunction}
          onContextMenu={(e) => e.preventDefault()}
          className="main-canvas"
          width="768"
          height="768"
          ref={canvas}
        />
      </div>
    </div>
  );
};

export default MainCanvas;
