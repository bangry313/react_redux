import { combineReducers } from 'redux';
import counter from './counter';
import todolist from './todolist';

// rootReducer
const rootReducer = combineReducers({
  counter,
  todolist,
  //.....
});

export default rootReducer;

