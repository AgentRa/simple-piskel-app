import {
  SET_ACTIVE_TOOL_ID, SET_MAIN_COLOR, SET_SECONDARY_COLOR, SWAP_COLORS, CHANGE_BUTTONS_CONFIG,
} from '../../constants/actionsNames';

const initialStore = {
  mainColor: [85, 85, 85],
  secondaryColor: [0, 0, 0],
  activeToolId: 'pen',
  buttonsConfiguration: ['P', 'E', 'B', 'S', 'U'],
};

const toolReducer = (store = initialStore, action) => {
  switch (action.type) {
    case SET_ACTIVE_TOOL_ID:
      return { ...store, activeToolId: action.payload };
    case SET_MAIN_COLOR:
      return { ...store, mainColor: action.payload };
    case SET_SECONDARY_COLOR:
      return { ...store, secondaryColor: action.payload };
    case SWAP_COLORS:
      return { ...store, secondaryColor: store.mainColor, mainColor: store.secondaryColor };
    case CHANGE_BUTTONS_CONFIG:
      return { ...store, buttonsConfiguration: action.payload };
    default:
      return store;
  }
};

export default toolReducer;
