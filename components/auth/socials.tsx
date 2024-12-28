'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';

const Socials = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Button
        variant={'outline'}
        className="flex gap-4 w-full"
        onClick={() =>
          signIn('google', {
            redirect: false,
            callbackUrl: '/',
          })
        }
      >
        <FcGoogle className="w-5 h-5" />
        <p>Sign in with Google</p>
      </Button>

      <Button
        variant={'outline'}
        className="flex gap-4 w-full"
        onClick={() =>
          signIn('github', {
            redirect: false,
            callbackUrl: '/',
          })
        }
      >
        <FaGithub className="w-5 h-5" />
        Sign in with Github
      </Button>
    </div>
  );
};

export default Socials;
