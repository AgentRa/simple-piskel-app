import {
  COPY_FRAME,
  DELETE_FRAME,
  CHANGE_ACTIVE_FRAME_ID,
  REPLACE_FRAME,
  CREATE_FRAME,
  CHANGE_FRAME,
  CHANGE_CANVAS_SIZE,
} from '../../constants/actionsNames';
import createBaseFrame from '../../utils/createBaseFrame';
import makeCopy from '../../utils/makeCopy';

const initialStore = {
  activeFrameId: 0,
  canvasSize: 32,
  frames: [createBaseFrame(32)],
  pixelSize: 24,
};

const framesControlReducer = (store = initialStore, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_FRAME_ID:
      return { ...store, activeFrameId: action.payload };

    case DELETE_FRAME:
      const cloneForDelete = makeCopy(store.frames);
      cloneForDelete.splice(action.payload, 1);
      return { ...store, activeFrameId: 0, frames: cloneForDelete };

    case CREATE_FRAME:
      return { ...store, frames: store.frames.concat([createBaseFrame(32)]) };


    case COPY_FRAME:
      const cloneForCopy = makeCopy(store.frames[action.payload]);
      store.frames.splice(action.payload, 0, cloneForCopy);

      return { ...store, frames: makeCopy(store.frames) };


    case REPLACE_FRAME:
      const framesCopy = makeCopy(store.frames);
      const startId = action.payload.id1;
      const targetId = action.payload.id2;
      [framesCopy[startId], framesCopy[targetId]] = [framesCopy[targetId], framesCopy[startId]];
      return { ...store, frames: framesCopy };

    case CHANGE_FRAME:
      const cloneFrames = makeCopy(store.frames);
      cloneFrames[store.activeFrameId] = action.payload;
      return { ...store, frames: cloneFrames };

    case CHANGE_CANVAS_SIZE:
      const newCanvasSize = action.payload;

      const { canvasSize, pixelSize, frames } = store;
      if (newCanvasSize === canvasSize) return store;
      const delta = Math.abs(newCanvasSize - canvasSize) / 2;
      const pixelDelta = canvasSize / newCanvasSize;
      const framesLength = frames.length;
      const mainCanvasContainer = document.querySelector('.main-canvas-container');

      mainCanvasContainer.style.backgroundSize = `${pixelSize * pixelDelta}px ${pixelSize * pixelDelta}px`;

      const result = makeCopy(store.frames);

      if (newCanvasSize > canvasSize) {
        for (let i = 0; i < framesLength; i += 1) {
          const frame = result[i];

          for (let x = 0; x < canvasSize; x += 1) {
            frame[x] = Array(delta).concat(frame[x]);
            frame[x] = frame[x].concat(Array(delta));
          }

          for (let x = 0; x < delta; x += 1) {
            frame.unshift(Array(delta * 2));
            frame.push(Array(delta * 2));
          }
        }
      }

      if (newCanvasSize < canvasSize) {
        for (let i = 0; i < framesLength; i += 1) {
          const frame = result[i];
          frame.splice(0, delta);
          frame.splice(newCanvasSize, delta);

          for (let x = 0; x < newCanvasSize; x += 1) {
            frame[x].splice(0, delta);
            frame[x].splice(newCanvasSize, delta);
          }
        }
      }

      return {
        ...store, pixelSize: pixelSize * pixelDelta, frames: result, canvasSize: newCanvasSize,
      };

    default:
      return store;
  }
};

export default framesControlReducer;
