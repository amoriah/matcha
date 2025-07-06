import logoUrl from '@assets/logo.svg';
import { Input } from '@components/Input';
import { signUpFInputsSettings } from './signUpInputsSettings';
import { useForm } from '@/hooks/useForm';
import type { inputValuesType } from '@/types';
import { hasEmptyInput } from '@/utils/hasEmptyInput';
//todo что за х с алеасами ??

export const SignUpForm = () => {
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
/*
все обязательные
 email - проверка формата
 login - только латиница , от 3 до 20
 firstName - только латиница от 2 до 15
 lastName - только латиница от 2 до 20
 password - 6 -20, буквы + цифры
*/
