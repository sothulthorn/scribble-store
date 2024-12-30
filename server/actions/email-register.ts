'use server';

import { RegisterSchema } from '@/types/register-schema';
import { createSafeActionClient } from 'next-safe-action';
import bcryt from 'bcrypt';
import { db } from '..';
import { users } from '../schema';
import { eq } from 'drizzle-orm';

const action = createSafeActionClient();

export const emailRegister = action(
  RegisterSchema,
  async ({ email, name, password }) => {
    const hashPassword = await bcryt.hash(password, 10);

    console.log(hashPassword);

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      // if (!existingUser.emailVerified) {
      //   const verificationToken =
      // }
      return { error: 'Email already in use' };
    }

    return { success: 'Register successful' };
  }
);
