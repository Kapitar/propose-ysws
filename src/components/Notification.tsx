'use client'

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

interface NotificationProps {
  children: React.ReactNode;
  type: "success" | "error" | "warning" | "info";
  className?: string;
  tracker: boolean;
}

const icons = {
  success: <IoIosCheckmarkCircleOutline className="text-2xl" />,
  error: <IoIosCloseCircleOutline className="text-2xl" />,
  warning: <AiOutlineExclamationCircle className="text-2xl" />,
  info: <IoMdInformationCircleOutline className="text-2xl" />,
};

const colors = {
  success: "bg-hc-green",
  error: "bg-hc-red",
  warning: "bg-hc-orange",
  info: "bg-hc-blue",
};

const Notification = ({ children, type, tracker, className }: NotificationProps) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => { 
    if (tracker) {
      setShowNotification(tracker);
      const timer = setTimeout(() => {
        setShowNotification(false);
        clearTimeout(timer);
      }, 3000);
    }
  }, [tracker]);

  return (
    <div
      className={`absolute right-4 bottom-4 px-6 py-2 text-white ${
        colors[type]
      } rounded-2xl flex items-center gap-x-4 ${className} transition-opacity duration-300 ease-in-out ${
        showNotification ? "opacity-100" : "opacity-0"
      }`}
    >
      {icons[type]}
      <p className="text-lg">{children}</p>
    </div>
  );
};

export default Notification;
