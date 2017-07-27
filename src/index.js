import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";

import App from './scripts/components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './scripts/reducers';

import thunk from "redux-thunk";
import logger from "redux-logger";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
