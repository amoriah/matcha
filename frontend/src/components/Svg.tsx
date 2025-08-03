import type { ReactNode } from 'react';

interface SvgProps {
  component: ReactNode;
  style?: string;
  hoverStyle?: string;
  click?: (_: any) => any;
}

export const Svg = ({
  component,
  hoverStyle = 'hover:bg-gray-50/60 rounded-md',
  style = '',
  click = undefined,
}: SvgProps) => {
  return (
    <div
      className={`cursor-pointer ${hoverStyle}  ${style} p-2`}
      onClick={click}
    >
      {component}
    </div>
  );
};
