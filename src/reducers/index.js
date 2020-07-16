import blogReducer from './blogReducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history => 
    combineReducers({
        blogReducer: blogReducer,
        router: connectRouter(history)
    });

export default createRootReducer;