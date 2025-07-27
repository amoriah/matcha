interface ChipProps {
  label: string;
  isSelected: boolean;
  toggle: (selected: string) => void;
}

export const Chip = ({ label, isSelected, toggle }: ChipProps) => {
  const disabledStyle =
    'bg-gray-200 text-gray-500 shadow-sm hover:bg-gray-300 ';
  const selectedStyle =
    'bg-matcha-bg text-gray-500 shadow-sm hover:bg-matcha-light';

  return (
    <span
      className={` px-1 inline rounded-md hover:cursor-pointer 
      ${isSelected ? selectedStyle : disabledStyle}`}
      onClick={() => {
        toggle(label);
      }}
    >
      {label}
    </span>
  );
};
