import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const PasswordInput = ({
  value,
  onChangeText,
  placeholder = 'Password',
}: Props) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        secureTextEntry={secure}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />

      <TouchableOpacity onPress={() => setSecure(!secure)}>
        {/* <Icon
          name={secure ? 'eye-off-outline' : 'eye-outline'}
          size={22}
          color="#777"
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    height: 52,
  },
});
