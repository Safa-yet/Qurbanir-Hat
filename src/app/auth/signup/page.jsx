import React from 'react';
import SignUpForm from '@/Component/auth/SignUpForm';

export const metadata = {
  title: 'Sign Up | Qurbanir Hat',
  description: 'Create an account on Qurbanir Hat to join thousands buying Qurbani animals with trust.',
};

const SignUpPage = () => {
    return (
        <SignUpForm />
    );
};

export default SignUpPage;