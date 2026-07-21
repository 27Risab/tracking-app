import React from 'react';
import { render } from '@testing-library/react-native';
import SignupScreen from '../src/screens/Auth/SignupScreen';

const mockReplace = jest.fn();
const mockGoBack = jest.fn();
const mockNavigate = jest.fn();

const navigation = () => {
  navigate: mockNavigate;
  goBack: mockGoBack;
  replace: mockReplace;
};

describe('SignUp Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('it should render signup screen', async () => {
    const screen = await render(<SignupScreen navigation={navigation} />);
    expect(screen.getAllByText('Create Account')).toHaveLength(2);

    expect(screen.getByText('Create your Team Chat account')).toBeTruthy();
  });
});
