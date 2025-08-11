import { useEffect, useState } from 'react';

interface NotificationProps {
  isOpen: boolean;
  text: string;
  type: 'success' | 'error' | 'info';
}

export const Notification = ({ isOpen, text, type }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);

      const timerId = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
      return () => clearTimeout(timerId);
    }
  }, [isOpen]);

  const bg = {
    success: 'bg-green-300/70',
    error: 'bg-red-300/70',
    info: 'bg-blue-300/70',
  }[type];

  const responsiveWidth =
    'w-auto 2xl:max-w-2xl xl:max-w-xl ld:max-w-md md:max-w-130 sm:max-w-100';

  return (
    <>
      <div
        className={`animate-notification transition-all duration-300 ease-in-out  absolute right-2 ${bg} ${isVisible ? 'top-2' : '-top-12'} ${responsiveWidth} 
          px-4 py-2 break-normal rounded-sm shadow-md`}
      >
        <p className="text-right text-gray-900">{text}</p>
      </div>
    </>
  );
};
