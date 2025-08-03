import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from '@hooks';
import { hasEmptyInput } from '@utils';
import logoUrl from '@assets/logo.svg';
import { login } from '@features/auth/authHandle';
import { Button, Input, Notification } from '@components';
import type { IInputsConfig, inputValuesType } from '@app-types';

interface AuthFormProps {
  fieldsSettings: IInputsConfig[];
  footerLabel: string;
  footerUrl: string;
  navigateTo: string;
  validator?: (value: string) => string;
}

export const AuthForm = ({
  fieldsSettings,
  footerLabel,
  footerUrl,
  navigateTo,
  validator,
}: AuthFormProps) => {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  //todo уведомление исчезает навсегда
  const defaultInputsValues = fieldsSettings.reduce<inputValuesType>(
    (acc, input) => {
      acc[input.name] = input.value;
      return acc;
    },
    {}
  );

  const { values, errors, isValid, handleChange, handleSubmit } = useForm({
    inputs: fieldsSettings,
    defaultInputs: defaultInputsValues,
    onSubmit: formData => {
      const passwordLetters = formData.password.replace(/\d/g, '');
      if (validator) {
        const errorMessage = validator(passwordLetters.toLowerCase());
        if (errorMessage) setError(errorMessage);
        else {
          login();
          navigate(navigateTo);
        }
      }
    },
  });

  const isDisabled = hasEmptyInput(values) || !isValid;

  return (
    <div className="w-full h-full flex items-start pt-36 justify-center ">
      {error && <Notification text={error} type="error" />}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 p-6 border border-gray-100 rounded-lg shadow-2xl"
      >
        <div className="flex justify-center items-center gap-2">
          <h2 className="font-bold text-3xl text-gray-600">Sign up</h2>
          <img className="w-10 h-10" src={logoUrl} alt="logo" />
        </div>

        {fieldsSettings.map((input, i) => {
          const { name, type, placeholder } = input;
          return (
            <Input
              key={`${i}`}
              name={name}
              value={values[name]}
              onChange={handleChange}
              type={type}
              placeholder={placeholder}
              error={errors ? errors[name] : null}
            />
          );
        })}
        <div>
          <a href={footerUrl}>
            <p className="font-normal text-lg text-gray-500 hover:text-matcha-text">
              {footerLabel}
            </p>
          </a>
        </div>
        <Button
          color={'bg-gradient-to-r from-matcha-bg to-rose-bright'}
          text={'Submit'}
          type="submit"
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};
