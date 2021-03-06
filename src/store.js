import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

const initialState = {
  abc: 'xyz'
};

const rootReducer = (state, action) => {
  return state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
);

export default store;
