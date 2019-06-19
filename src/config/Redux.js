import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from './../data/Reducers';
import history from './routes/History';

const routerHistoryMiddleware = routerMiddleware(history);
const composeEnhancers = (process.env.APP_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const middlewares = [
  thunk,
  routerHistoryMiddleware,
];

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
