import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk'; // Import redux-thunk
import RocketList from '../rocket/RocketList';

const mockStore = configureStore([thunk]); // Add thunk middleware to the store

test('it renders the RocketList component', () => {
  const store = mockStore({ rockets: { rockets: [], isLoading: false } });

  render(
    <Provider store={store}>
      <RocketList />
    </Provider>,
  );
});
