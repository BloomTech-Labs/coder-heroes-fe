import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
});

export default rootReducer;
