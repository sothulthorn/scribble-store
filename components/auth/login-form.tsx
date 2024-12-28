'use client';

import AuthCard from '@/components/auth/auth-card';

const LoginForm = () => {
  return (
    <AuthCard
      cardTitle="Welcome back!"
      backButtonHref="/auth/register"
      backButtonLabel="create a new account"
      showSocials
    >
      <div>
        <h1>Hey</h1>
      </div>
    </AuthCard>
  );
};

export default LoginForm;
