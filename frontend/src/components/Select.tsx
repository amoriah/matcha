interface SelectProps {
  options: string[];
  value: string;
  changeValue: (e: any) => void;
}

export const Select = ({ options, value, changeValue }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={changeValue}
      className="w-80 h-12 px-4 py-3 border border-gray-300 rounded-lg
      focus:border-lime-500 focus:outline focus:outline-lime-500 text-lg"
    >
      {options.map((option, i) => (
        <option key={`${option}-${i}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
