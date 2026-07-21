import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import AppLogo from '../../components/AppLogo';
import AppInput from '../../components/AppInput';
import PasswordInput from '../../components/PasswordInput';
import AppButton from '../../components/AppButton';
import ErrorText from '../../components/ErrorText';
import AppText from '../../components/AppText';

import {signupSchema} from '../../validation/authValidation';
import {SignupFormData} from '../../validation/authValidation';

import {supabase} from '../../services/supabase';

import Colors from '../../theme/colors';

const SignupScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),

    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: SignupFormData) => {
    try {
      setLoading(true);

      const {error} = await supabase.auth.signUp({
        email: values.email,
        password: values.password,

        options: {
          data: {
            full_name: values.fullName,
          },
        },
      });

      if (error) {
        Alert.alert('Signup Failed', error.message);
        return;
      }

      Alert.alert(
        'Success',
        'Verification email sent successfully.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('VerifyEmail'),
          },
        ],
      );

      reset();
    } catch (e: any) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>

      <AppLogo />

      <Header
        title="Create Account"
        subtitle="Create your Team Chat account"
      />

      {/* Full Name */}

      <Controller
        control={control}
        name="fullName"
        render={({field: {onChange, value}}) => (
          <>
            <AppInput
              placeholder="Full Name"
              value={value}
              onChangeText={onChange}
            />

            <ErrorText
              message={errors.fullName?.message}
            />
          </>
        )}
      />

      {/* Email */}

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value}}) => (
          <>
            <AppInput
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
            />

            <ErrorText
              message={errors.email?.message}
            />
          </>
        )}
      />

      {/* Password */}

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => (
          <>
            <PasswordInput
              placeholder="Password"
              value={value}
              onChangeText={onChange}
            />

            <ErrorText
              message={errors.password?.message}
            />
          </>
        )}
      />

      {/* Confirm Password */}

      <Controller
        control={control}
        name="confirmPassword"
        render={({field: {onChange, value}}) => (
          <>
            <PasswordInput
              placeholder="Confirm Password"
              value={value}
              onChangeText={onChange}
            />

            <ErrorText
              message={
                errors.confirmPassword?.message
              }
            />
          </>
        )}
      />

      <View style={styles.spacer} />

      <AppButton
        title={
          loading
            ? 'Creating Account...'
            : 'Create Account'
        }
        disabled={loading}
        onPress={handleSubmit(onSubmit)}
      />

      {loading && (
        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={styles.loader}
        />
      )}

      <View style={styles.footer}>

        <AppText>
          Already have an account?
        </AppText>

        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <AppText style={styles.login}>
            Login
          </AppText>
        </TouchableOpacity>

      </View>

    </ScreenWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({

  footer:{

    flexDirection:'row',

    justifyContent:'center',

    marginTop:25,

    alignItems:'center',

  },

  login:{

    color:Colors.primary,

    marginLeft:5,

    fontWeight:'700',

  },
  spacer:{
    height:20
  },
  loader:{marginTop:20}

});