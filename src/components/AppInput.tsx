import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../theme/colors';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

const AppInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
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