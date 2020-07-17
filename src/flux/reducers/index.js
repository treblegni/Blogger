import blogReducer from './blogReducer';
import blogEditorReducer from './blogEditorReducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history => 
    combineReducers({
        blogsState: blogReducer,
        blogEditor: blogEditorReducer,
        router: connectRouter(history)
    });

export default createRootReducer;