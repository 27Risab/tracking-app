import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
jest.mock('react-native-url-polyfill/auto', () => ({}));
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');