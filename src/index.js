import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeConfig from './store/';
import history from './store/history';
import { Provider } from 'react-redux';
import { Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

//TODO: REMOVE ON PRODUCTION
import ReduxDevTools from './utils/DevTools';

import './index.css';

const store = storeConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path='/' component={App}/>
        <ReduxDevTools/>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);