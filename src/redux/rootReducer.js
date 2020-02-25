import { combineReducers } from 'redux';
import toolReducer from './Tools/toolReducer';
import framesControlReducer from './FramesControl/framesControlReducer';

const rootReducer = combineReducers({
  tools: toolReducer,
  framesControl: framesControlReducer,
});

export default rootReducer;
