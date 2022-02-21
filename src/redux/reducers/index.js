import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import adminReducers from './adminReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  adminReducers,
});

export default rootReducer;
