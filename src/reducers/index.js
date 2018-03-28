import { combineReducers } from 'redux';
import TestExampleReducer from './reducer_tester';

const rootReducer = combineReducers({
	// state: (state ={}) => state
	list: TestExampleReducer
});

export default rootReducer;
