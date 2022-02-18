import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import childReducer from './childReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  childReducer,
});

export default rootReducer;
