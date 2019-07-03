import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { loadState, saveState } from './modules/localStorage';

const store = createStore(
  rootReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);
