import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import Colors from '../theme/colors';

interface Props extends TextInputProps {}

const AppInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  testID,
}: Props) => {
  return (
    <TextInput
      testID={testID}
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      placeholderTextColor={Colors.textSecondary}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    height: 52,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: Colors.text,
  },
});