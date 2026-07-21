import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';
import Colors from '../theme/colors';

interface Props {
  title: string;
  onPress: (event?: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  testID?: string;
}

const AppButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  testID,
}: Props) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 52,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabledButton: {
    opacity: 0.6,
  },

  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
