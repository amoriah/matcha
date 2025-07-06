import type { IInputsConfig } from '@/types';
import { checkRequire } from '../validate';

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
