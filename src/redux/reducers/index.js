import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  userReducer,
});

export default rootReducer;
