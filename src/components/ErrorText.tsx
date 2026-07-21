import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../theme/colors';

type Props = {
  message?: string;
};

const ErrorText = ({ message }: Props) => {
  if (!message) {
    return null;
  }

  return <Text style={styles.error}>{message}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  error: {
    color: Colors.error,
    marginTop: -8,
    marginBottom: 10,
    fontSize: 13,
  },
});
