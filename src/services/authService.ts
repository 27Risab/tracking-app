import { supabase } from './supabase';

export const signUp = async (
  fullName: string,
  email: string,
  password: string,
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
};
