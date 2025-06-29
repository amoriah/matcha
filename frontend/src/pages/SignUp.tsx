import { useState } from 'react';
import { Input } from '../components/Input';
import { checkMaxLength } from './validate';
import logoUrl from '../assets/logo.svg';

interface IFieldConfig {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleFunction: (value: string) => string;
}

export const SignUp = () => {
  const [isValid, setIsValid] = useState(false);

  const handleValidForm = (value: boolean) => {
    setIsValid(value);
  };

  const signUpInputSettings: IFieldConfig[] = [
    {
      id: '1',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      value: '',
      handleFunction: (value: string) => '',
    },
    {
      id: '2',
      name: 'login',
      type: 'text',
      placeholder: 'Login',
      value: '',
      handleFunction: (value: string) => {
        if (!checkMaxLength(value, 15)) {
          return 'line too long';
        } else return '';
      },
    },
    {
      id: '3',
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      value: '',
      handleFunction: (value: string) => '',
    },
    {
      id: '4',
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      value: '',
      handleFunction: (value: string) => '',
    },
    {
      id: '5',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      value: '',
      handleFunction: (value: string) => '',
    },
  ];

  const submit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { email, login, firstName, lastName, password } =
      Object.fromEntries(formData);

    console.log('daformData: ', email, login, firstName, lastName, password);
  };

  return (
    <div className="w-full h-full flex items-start pt-36 justify-center ">
      <form
        onSubmit={submit}
        className="flex flex-col items-center gap-8 p-6 border border-gray-100 rounded-lg shadow-2xl"
      >
        <div className="flex justify-center items-center gap-2">
          <h2 className="font-bold text-3xl text-gray-600">Sign up in </h2>
          <img className="w-10 h-10" src={logoUrl} alt="logo" />
        </div>

        {signUpInputSettings.map((input, i) => {
          const { id, name, type, placeholder, handleFunction } = input;
          return (
            <Input
              key={`${id}-${i}`}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              handleFunction={handleFunction}
              handleValidForm={handleValidForm}
            />
          );
        })}
        <button
          type="submit"
          className="mt-2 px-6 py-3 border-0 rounded-2xl  bg-gradient-to-r from-fuchsia-400 to-rose-500 shadow-md hover:shadow-lg text-white font-bold text-xl"
        >
          {'Submit'}
        </button>
      </form>
    </div>
  );
};
/*
 email - 
 login - отсутствие символов кроме букв, максимальная длина и минимальная длина
 firstName - отсутствие символов кроме букв, только английский,, максимальная длина и минимальная длина
 lastName - отсутствие символов кроме букв, только английский,, максимальная длина и минимальная длина
 password
*/
