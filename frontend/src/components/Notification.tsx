import { useState } from "react";

interface NotificationProps {
  text: string;
  type: "success" | "error" | "info";
}

/*
повесить тайм аут на закрытие или сделать обертку с тайм аутом,
отступы, размеры и все такое по красоте
*/
export const Notification = ({ text, type }: NotificationProps) => {
  const [isDisplay, setIsDisplay] = useState(true);

  setTimeout(() => {
    setIsDisplay(false);
  }, 3000);

  const bg = {
    success: "bg-green-300",
    error: "bg-red-300",
    info: "bg-blue-300",
  }[type];

  const responsiveWidth =
    "max-w-100 2xl:max-w-2xl xl:max-w-xl ld:max-w-md md:max-w-130 sm:max-w-100";
//
  return (
    <div
      className={`animate-notification absolute right-2 top-2 ${bg} ${isDisplay ? "block" : "hidden"} ${responsiveWidth} max-h-32 px-4 py-2 break-normal rounded-sm shadow-md`}
    >
      <p className="text-right text-gray-900">{text}</p>
    </div>
  );
};
