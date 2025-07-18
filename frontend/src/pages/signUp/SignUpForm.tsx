import logoUrl from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Notification } from '@components/Notification';
import { signUpFInputsSettings } from './signUpInputsSettings';
import { useForm } from '@/hooks/useForm';
import type { inputValuesType } from '@/types';
import { hasEmptyInput } from '@/utils/hasEmptyInput';
import { useWordsValidator } from '@/hooks/useWordsValidator';
import { useState } from 'react';
//todo что за х с алеасами ??

export const SignUpForm = () => {
  const { isSimpleEnglishWord } = useWordsValidator();
  const [error, setError] = useState('hafJAFKLKJlksaW;KSKXKDEWFWE');

  const defaultInputsValues = signUpFInputsSettings.reduce<inputValuesType>(
    (acc, input) => {
      acc[input.name] = input.value;
      return acc;
    },
    {}
  );
  const { values, errors, isValid, handleChange, handleSubmit } = useForm({
    inputs: signUpFInputsSettings,
    defaultInputs: defaultInputsValues,
    onSubmit: formData => {
      const passwordLetters = formData.password.replace(/\d/g, '');
      if (!isSimpleEnglishWord(passwordLetters.toLowerCase()))
        console.log('do request here');
      else {
        setError('Password mustn incluse common english word')
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
          <h2 className="font-bold text-3xl text-gray-600">Sign up in </h2>
          <img className="w-10 h-10" src={logoUrl} alt="logo" />
        </div>

        {signUpFInputsSettings.map((input, i) => {
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
        <button
          type="submit"
          className="mt-2 px-6 py-3 border-0 rounded-2xl  bg-gradient-to-r from-matcha-bg to-rose-bright shadow-md hover:shadow-lg text-white 
          font-bold text-xl

           disabled:bg-gray-300
            disabled:from-none disabled:to-none
             disabled:bg-none
            disabled:text-gray-500
             disabled:shadow-none"
          disabled={isDisabled}
        >
          {'Submit'}
        </button>
      </form>
    </div>
  );
};
