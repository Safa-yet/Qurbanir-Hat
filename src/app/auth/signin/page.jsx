import React from 'react';
import SignInForm from '@/Component/auth/SignInForm';

export const metadata = {
  title: 'Sign In | Qurbanir Hat',
  description: 'Login to your Qurbanir Hat account to buy or sell Qurbani animals with trust.',
};

const SignInPage = () => {
    return (
        <SignInForm />
    );
};

export default SignInPage;