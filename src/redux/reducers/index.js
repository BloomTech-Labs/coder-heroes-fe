import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import adminReducers from './adminReducer';
import userReducer from './userReducer';
import childReducer from './childReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  adminReducers,
  userReducer,
  childReducer,
});

export default rootReducer;
