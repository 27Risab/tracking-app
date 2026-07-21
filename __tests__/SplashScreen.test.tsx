import React from 'react';
import { act, render } from '@testing-library/react-native';
import SplashScreen from '../src/screens/Auth/SplashScreen';

const mockReplace = jest.fn();

const navigation = {
  replace: mockReplace,
};
describe('SplashScreen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('it should render splash Screen', async () => {
    const screen = await render(<SplashScreen navigation={navigation} />);
    expect(screen.toJSON()).toBeTruthy();
  });

  it('should navigation replace to login after 2 seconds', async () => {
    await render(<SplashScreen navigation={navigation} />);
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(mockReplace).toHaveBeenCalledWith('Login');
  });
});
