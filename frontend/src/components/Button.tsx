interface ButtonProps {
  color: string;
  text: string;
  disabled?: boolean;
  click?: (_: any) => any;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  color,
  text,
  click = undefined,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={click}
      disabled={disabled}
      className={`px-6 py-3 border-0 rounded-2xl ${color} shadow-md shadow-matcha-light/50 hover:shadow-lg text-white 
          font-bold text-xl 
          disabled:bg-gray-300
            disabled:from-none 
            disabled:to-none
             disabled:bg-none
            disabled:text-gray-500
             disabled:shadow-none`}
    >
      {text}
    </button>
  );
};
