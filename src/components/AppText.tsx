import React from 'react';
import {Text,StyleSheet, TextProps} from 'react-native';
import Colors from '../theme/colors';

const AppText = ({style, ...props}: TextProps) => {
  return (
    <Text
      {...props}
      style={[
        
          styles.text
        ,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
    text:{
color: Colors.text,
          fontSize: 16,
    }
});
export default AppText;