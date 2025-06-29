import { useState } from 'react';
import { FieldError } from './FieldError';

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  handleFunction: (value: string) => string;
  handleValidForm: (value: boolean) => void;
  type?: string;
}

export const Input = ({
  id,
  name,
  placeholder,
  handleFunction,
  handleValidForm,
  type = 'text',
}: InputProps) => {
  const [error, setError] = useState('');

  const checkField = (e: any) => {
    const message = handleFunction(e.target.value);
    if (message) handleValidForm(false);
    setError(message);
  };

  return (
    <div className="flex flex-col relative">
      <input
        id={id}
        name={name}
        type={type}
        className="w-80 h-12 px-4 py-3 border border-gray-300 rounded-lg
     focus:border-fuchsia-400 focus:outline focus:outline-fuchsia-400 text-lg"
        placeholder={placeholder}
        onChange={checkField}
      />
      {error && <FieldError message={error} />}
    </div>
  );
};
