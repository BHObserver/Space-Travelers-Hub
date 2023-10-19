import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider, useDispatch as useDispatchMock } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../../App';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore();
let store;

describe('With React Testing Library', () => {
  beforeEach(() => {
    store = mockStore({ dragon: { dragons: [] } });
    useDispatchMock.mockReturnValue(jest.fn());
  });

  it('Renders the main-dragon div', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const mainDragonDiv = getByTestId('main-dragon');
    expect(mainDragonDiv).toBeInTheDocument();
  });
});
