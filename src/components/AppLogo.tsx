import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});
