interface FieldErrorProps {
  message: string;
}

export const FieldError = ({ message }: FieldErrorProps) => {
  return <span className="absolute  -bottom-6 left-2 text-md text-red-600">{message}</span>;
};
