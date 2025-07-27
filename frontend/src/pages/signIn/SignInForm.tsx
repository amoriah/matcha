// import { useNavigate } from 'react-router';
import type { IInputsConfig } from '@app-types';
import { AuthForm } from '@features/auth/AuthForm';
import { checkRequire } from '../validate';
// import { login } from '@features/auth/authHandle';

export const signInFInputsSettings: IInputsConfig[] = [
  {
    id: '1',
    name: 'login',
    type: 'text',
    placeholder: 'Login',
    value: '',
    error: '',
    validate: (value: string) => {
      const requireErrorMessage = checkRequire(value);
      return requireErrorMessage || '';
    },
  },

  {
    id: '2',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    value: '',
    error: '',
    validate: (value: string) => {
      const requireErrorMessage = checkRequire(value);

      return requireErrorMessage || '';
    },
  },
];


export const SignInForm = () => {
  // const navigate = useNavigate();

  // const submitHandle = () => {
  //   login();
  //   navigate('/matcha');
  // };

  return (
    <AuthForm
      fieldsSettings={signInFInputsSettings}
      footerLabel={"Don't have an account? Click to sign up"}
      footerUrl={'/matcha/signup'}
      navigateTo={'/matcha'}
      // submitHandle={submitHandle}
    />
  );
};
