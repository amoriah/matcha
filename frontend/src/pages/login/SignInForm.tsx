import type { inputValuesType } from '@/types';
import { signInFInputsSettings } from './signInInputsSettings';
import logoUrl from '@assets/logo.svg';
import { useForm } from '@/hooks/useForm';
import { hasEmptyInput } from '@/utils/hasEmptyInput';
import { Input } from '@/components/Input';

export const SignInForm = () => {
  const defaultInputsValues = signInFInputsSettings.reduce<inputValuesType>(
    (acc, input) => {
      acc[input.name] = input.value;
      return acc;
    },
    {}
  );
  const { values, errors, isValid, handleChange, handleSubmit } = useForm({
    inputs: signInFInputsSettings,
    defaultInputs: defaultInputsValues,
    onSubmit: formData => {
      console.log('formData: ', formData);
    },
  });

  const isDisabled = hasEmptyInput(values) || !isValid;
  return (
    <div className="w-full h-full flex items-start pt-36 justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 p-6 border border-gray-100 rounded-lg shadow-2xl"
      >
        <div className="flex justify-center items-center gap-2">
          <h2 className="font-bold text-3xl text-gray-600">Sign in </h2>
          <img className="w-10 h-10" src={logoUrl} alt="logo" />
        </div>

        {signInFInputsSettings.map((input, i) => {
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
          className="mt-2 px-6 py-3 border-0 rounded-2xl  bg-gradient-to-r from-lime-400 to-rose-500 shadow-md hover:shadow-lg text-white 
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
