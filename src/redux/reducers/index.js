import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import userReducer from './userReducer';
import childReducer from './childReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  userReducer,
  childReducer,
});

export default rootReducer;
