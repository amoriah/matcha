interface FieldErrorProps {
  message: string;
}

export const FieldError = ({ message }: FieldErrorProps) => {
  return <span className="absolute  -bottom-5 left-2 text-sm text-gray-600">{message}</span>;
};
