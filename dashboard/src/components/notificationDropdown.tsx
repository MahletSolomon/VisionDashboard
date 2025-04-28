import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"; // Adjust the import path based on your project structure

import bellIcon from "../assets/bell.svg";

// Define the type for a notification
interface Notification {
  id: number;
  message: string;
}

const NotificationDropdown: React.FC = () => {
  const notifications: Notification[] = [
    { id: 1, message: "New assignment available" },
    { id: 2, message: "Class schedule updated" },
    { id: 3, message: "New message from teacher" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-10 h-10 flex items-center justify-center rounded-full bg-bgsecondary border border-border focus:outline-none hover:scale-105 transition-transform duration-200 ease-in-out">
        <img src={bellIcon} alt="Notifications" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-2 bg-white rounded-lg shadow-lg align-start">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="hover:cursor-pointer"
            >
              {notification.message}
            </DropdownMenuItem>
          ))
        ) : (
          <p className="text-gray-500">No notifications</p>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;