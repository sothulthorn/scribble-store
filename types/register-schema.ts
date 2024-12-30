import * as z from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
  name: z
    .string()
    .min(4, { message: 'Please add a name at least 4 characters' }),
});
