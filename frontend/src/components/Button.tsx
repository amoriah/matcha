interface ButtonProps {
  title: string;
}

//not use
export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="px-6 py-3 border-0 rounded-2xl  bg-gradient-to-r from-fuchsia-400 to-rose-500 shadow-md hover:shadow-lg text-white font-bold">
      {title}
    </button>
  );
};
