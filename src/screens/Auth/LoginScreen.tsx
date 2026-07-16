import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {Controller, useForm} from 'react-hook-form';

import {zodResolver} from '@hookform/resolvers/zod';

import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import AppInput from '../../components/AppInput';
import PasswordInput from '../../components/PasswordInput';
import AppButton from '../../components/AppButton';
import ErrorText from '../../components/ErrorText';
import AppLogo from '../../components/AppLogo';

import Colors from '../../theme/colors';

import {
  loginSchema,
  LoginFormData,
} from '../../validation/authValidation';

const LoginScreen = ({navigation}: any) => {
  const [rememberMe, setRememberMe] =
    useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <ScreenWrapper>
      <AppLogo />

      <Header
        title="Welcome Back"
        subtitle="Login to continue"
      />

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value}}) => (
          <>
            <AppInput
              placeholder="Email"
              value={value}
              onChangeText={onChange}
            />

            <ErrorText
              message={errors.email?.message}
            />
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => (
          <>
            <PasswordInput
              value={value}
              onChangeText={onChange}
            />

            <ErrorText
              message={errors.password?.message}
            />
          </>
        )}
      />

      <View style={styles.row}>

        <View style={styles.checkboxRow}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
          />

          <Text style={styles.text}>
            Remember Me
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'ForgotPassword',
            )
          }>

          <Text style={styles.link}>
            Forgot?
          </Text>

        </TouchableOpacity>

      </View>

      <AppButton
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />

      <View style={styles.footer}>

        <Text>
          Don't have an account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Signup')
          }>

          <Text style={styles.signup}>
            Sign Up
          </Text>

        </TouchableOpacity>

      </View>

    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: Colors.text,
  },

  link: {
    color: Colors.primary,
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  signup: {
    marginLeft: 5,
    color: Colors.primary,
    fontWeight: '700',
  },
});