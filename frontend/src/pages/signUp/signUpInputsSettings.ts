import type { IInputsConfig } from '@/types';
import {
  checkEmail,
  checkLogin,
  checkMaxLength,
  checkMinLength,
  checkNames,
  checkPassword,
  checkRequire,
} from '../validate';

export const signUpFInputsSettings: IInputsConfig[] = [
  {
    id: '1',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    value: '',
    error: '',
    validate: (value: string) => {
      const requireErrorMessage = checkRequire(value);
      const emailErrorMessage = checkEmail(value);
      return requireErrorMessage || emailErrorMessage || '';
    },
  },
  {
    id: '2',
    name: 'login',
    type: 'text',
    placeholder: 'Login',
    value: '',
    error: '',
    validate: (value: string) => {
      const requireErrorMessage = checkRequire(value);
      const minErrorMassage = checkMinLength(value, 3);
      const maxErrorMassage = checkMaxLength(value, 20);
      const loginErrorMessage = checkLogin(value);

      return (
        requireErrorMessage ||
        loginErrorMessage ||
        minErrorMassage ||
        maxErrorMassage ||
        ''
      );
    },
  },
  {
    id: '3',
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
    value: '',
    error: '',
    validate: (value: string) => {
      const requireErrorMessage = checkRequire(value);
      const minErrorMassage = checkMinLength(value, 2);
      const maxErrorMassage = checkMaxLength(value, 15);
      const nameErrorMessage = checkNames(value);

      return (
        requireErrorMessage ||
        nameErrorMessage ||
        minErrorMassage ||
        maxErrorMassage ||
        ''
      );
    },
  },
  {
    id: '4',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last Name',
    value: '',
    error: '',
    validate: (value: string) => {
      const requireErrorMessage = checkRequire(value);
      const minErrorMassage = checkMinLength(value, 2);
      const maxErrorMassage = checkMaxLength(value, 15);
      const nameErrorMessage = checkNames(value);

      return (
        requireErrorMessage ||
        nameErrorMessage ||
        minErrorMassage ||
        maxErrorMassage ||
        ''
      );
    },
  },
  {
    id: '5',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    value: '',
    error: '',
    validate: (value: string) => {
      const requireErrorMessage = checkRequire(value);
      const minErrorMassage = checkMinLength(value, 6);
      const maxErrorMassage = checkMaxLength(value, 20);
      const passErrorMessage = checkPassword(value);

      return (
        requireErrorMessage ||
        passErrorMessage ||
        minErrorMassage ||
        maxErrorMassage ||
        ''
      );
    },
  },
];
