import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

export const Enhance = (component, state) => {
  const mockStore = configureMockStore()(state);

  return (
    <Provider store={mockStore}>
      {component}
    </Provider>
  );
};

export default {
  Enhance,
};
