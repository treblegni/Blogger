import thunk from 'redux-thunk';
import history from './history';
import ReduxDevTools from '../utils/DevTools';
import createRootReducer from '../reducers';
import { createStore,applyMiddleware,compose } from 'redux';

const rootReducer = createRootReducer(history);

const enhancer = compose(
    applyMiddleware(thunk),
    //TODO: REMOVE ON PRODUCTION
    ReduxDevTools.instrument()
);

const storeConfig = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    }
    return store;
}
export default storeConfig;