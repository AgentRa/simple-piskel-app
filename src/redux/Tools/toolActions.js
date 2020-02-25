import {
  SET_ACTIVE_TOOL_ID, SET_MAIN_COLOR, SET_SECONDARY_COLOR, SWAP_COLORS, CHANGE_BUTTONS_CONFIG,
} from '../../constants/actionsNames';

export const setActiveToolId = (id) => ({
  type: SET_ACTIVE_TOOL_ID,
  payload: id,
});

export const setMainColor = (color) => ({
  type: SET_MAIN_COLOR,
  payload: color,
});

export const setSecondaryColor = (color) => ({
  type: SET_SECONDARY_COLOR,
  payload: color,
});

export const changeButtonsConfig = (newConfig) => ({
  type: CHANGE_BUTTONS_CONFIG,
  payload: newConfig,
});

export const swapColors = { type: SWAP_COLORS };
