import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import ScreenWrapper from "../../components/ScreenWrapper";
import AppLogo from "../../components/AppLogo";

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <AppLogo />
      </View>
    </ScreenWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});