import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import adminReducers from './adminReducer';
import userReducer from './userReducer';
import childReducer from './childReducer';
import coursesReducer from './coursesReducer';
import classroomReducer from './classroomReducer';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  adminReducers,
  userReducer,
  childReducer,
  coursesReducer,
  classroomReducer,
});

export default rootReducer;
