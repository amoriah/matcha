import { useState } from 'react';

interface NotificationProps {
  text: string;
  type: 'success' | 'error' | 'info';
}

/*
повесить тайм аут на закрытие или сделать обертку с тайм аутом,
отступы, размеры и все такое по красоте
*/
export const Notification = ({ text, type }: NotificationProps) => {
  const [isDisplay, setIsDisplay] = useState(true);

  setTimeout(() => {
    setIsDisplay(false);
  }, 5000);

  const bg = {
    success: 'bg-green-300',
    error: 'bg-red-300',
    info: 'bg-blue-300',
  }[type];

  return <div className={`absolute right-0 top-0 ${bg} ${isDisplay ? 'block' : 'hidden'} `}>{text}</div>;
};
