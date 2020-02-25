import {
  COPY_FRAME, DELETE_FRAME, CHANGE_ACTIVE_FRAME_ID, REPLACE_FRAME, CREATE_FRAME, CHANGE_FRAME, CHANGE_CANVAS_SIZE,
} from '../../constants/actionsNames';

export const createFrame = { type: CREATE_FRAME };

export const deleteFrame = (id) => ({
  type: DELETE_FRAME,
  payload: id,
});

export const copyFrame = (id) => ({
  type: COPY_FRAME,
  payload: id,
});

export const changeActiveFrameId = (id) => ({
  type: CHANGE_ACTIVE_FRAME_ID,
  payload: id,
});

export const replaceFrame = (id1, id2) => ({
  type: REPLACE_FRAME,
  payload: { id1, id2 },
});

export const changeFrame = (frame) => ({
  type: CHANGE_FRAME,
  payload: frame,
});

export const changeCanvasSize = (newCanvasSize) => ({
  type: CHANGE_CANVAS_SIZE,
  payload: newCanvasSize,
});
