import React from 'react';
import {Text, TextProps} from 'react-native';
import Colors from '../theme/colors';

const AppText = ({style, ...props}: TextProps) => {
  return (
    <Text
      {...props}
      style={[
        {
          color: Colors.text,
          fontSize: 16,
        },
        style,
      ]}
    />
  );
};

export default AppText;