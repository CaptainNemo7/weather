import { combineReducers } from 'redux';
import TestExampleReducer from './reducer_tester';
import ActiveBook from './reducer_active_list_item'

const rootReducer = combineReducers({
	// state: (state ={}) => state
	list: TestExampleReducer,
	activeBook: ActiveBook
});

export default rootReducer;
