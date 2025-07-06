import { useEffect, useState } from 'react';
import type {
  IInputsConfig,
  eventType,
  inputValuesType,
  inputErrorsType,
  postDataType,
} from '@/types';

interface UseFormProps {
  inputs: IInputsConfig[];
  defaultInputs: inputValuesType;
  onSubmit: (formData: postDataType) => void;
}

export const useForm = ({ inputs, defaultInputs, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState<inputValuesType>(defaultInputs);
  const [errors, setErrors] = useState<inputErrorsType>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (errors) {
      const isAllInputsValid = Object.values(errors).every(error => !error);
      setIsValid(isAllInputsValid);
    }
  }, [errors]);

  const handleChange = (e: eventType) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    const input = inputs.find(f => f.name === name);
    const error = input?.validate ? input.validate(value) : null;

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValid) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
    handleSubmit,
  };
};
