import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import { middlewares } from './../../src/config/Redux';
import realReducers from './../../src/data/Reducers';
import { store } from './../../src/config/Redux';

import objectPath from 'object-path';

export const configureMockStore = (initialData = {}) => {
  const reducers = realReducers({}, {});
  const reducersWithData = Object.assign({}, reducers);

  for (var key in initialData) {
    if (objectPath.has(reducersWithData, key)) {
      objectPath.set(reducersWithData, key, initialData[key]);
    }
  }

  return configureStore(middlewares)(reducersWithData);
}

export const mockStore = configureMockStore();

window.fetch = jest.fn().mockImplementation(() => Promise.resolve());

export function componentWithProvider(Component, props = {}) {
  return mount(
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function componentWithMockProvider(Component, state = {}, props = {}) {
  const mockStore = configureMockStore(state);

  return mount(
    <Provider store={mockStore}>
      <Component {...props} />
    </Provider>
  );
}
