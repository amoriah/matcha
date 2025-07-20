import { useState } from 'react';

interface NotificationProps {
  text: string;
  type: 'success' | 'error' | 'info';
}

export const Notification = ({ text, type }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  //сначала меняем position (применяется анимация), затем только убираем из DOM
  setTimeout(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 300);
  }, 6000);

  const bg = {
    success: 'bg-green-300',
    error: 'bg-red-300',
    info: 'bg-blue-300',
  }[type];

  const responsiveWidth =
    'max-w-100 2xl:max-w-2xl xl:max-w-xl ld:max-w-md md:max-w-130 sm:max-w-100';

  return (
    <>
      {isMounted && (
        <div
          className={`animate-notification transition-all duration-300 ease-in-out  absolute right-2 ${bg} ${isVisible ? 'top-2' : '-top-12'} ${responsiveWidth} max-h-32 px-4 py-2 break-normal rounded-sm shadow-md`}
        >
          <p className="text-right text-gray-900">{text}</p>
        </div>
      )}
    </>
  );
};
