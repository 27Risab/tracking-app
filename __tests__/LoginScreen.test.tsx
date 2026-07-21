import React from 'react';
import { render } from '@testing-library/react-native';

import LoginScreen from '../src/screens/Auth/LoginScreen';

const navigation = {
  navigate: jest.fn(),
  replace: jest.fn(),
};

describe('Login Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render login screen', async () => {
    const { getByText } = await render(<LoginScreen navigation={navigation} />);

    expect(getByText('Welcome Back')).toBeTruthy();
  });
});
