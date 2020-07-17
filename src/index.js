import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import storeConfig from './flux/store/';
import history from './flux/store/history';
import { Provider } from 'react-redux';
import { Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './stylesheets/main.sass';

//TODO: REMOVE ON PRODUCTION
import ReduxDevTools from './utils/DevTools';

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