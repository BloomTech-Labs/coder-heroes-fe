import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  adminReducer,
});

export default rootReducer;
