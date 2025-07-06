import { FieldError } from './FieldError';
import type { eventType } from '@/types';

interface InputProps {
  name: string;
  value: string;
  placeholder: string;
  error: string | null;
  onChange: (e: eventType) => void;
  type?: string;
}

export const Input = ({
  name,
  value,
  placeholder,
  error,
  onChange,
  type = 'text',
}: InputProps) => {

  return (
    <div className="flex flex-col relative">
      <input
        name={name}
        value={value}
        type={type}
        className="w-80 h-12 px-4 py-3 border border-gray-300 rounded-lg
     focus:border-lime-500 focus:outline focus:outline-lime-500 text-lg"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <FieldError message={error} />}
    </div>
  );
};
