import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),

  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/* signup screen validation */

export const signupSchema = z
  .object({
    fullName: z.string().min(2, 'full Name is required'),

    email: z.string().min(1, 'Email is required').email('Invalid email'),

    password: z.string().min(6, 'Password must be at least 6 characters'),

    confirmPassword: z.string().min(6, 'Confirm Password is required'),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type SignupFormData = z.infer<typeof signupSchema>;
