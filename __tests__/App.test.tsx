import React from 'react';
import { act, render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders successfully', async () => {
    const { findByText } = await render(<App />);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(await findByText('Welcome Back')).toBeTruthy();
  });
});
