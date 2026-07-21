import React from 'react';
import {render, screen} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders successfully', async () => {
    render(<App />);

    expect(
      await screen.findByText('Welcome Back'),
    ).toBeTruthy();
  });
});