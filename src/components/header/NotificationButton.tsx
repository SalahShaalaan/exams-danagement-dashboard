import { useState } from "react";
import { FiBell } from "react-icons/fi";
import HeaderIconButton from "./HeaderIconButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";

interface NotificationButtonProps {
  unreadCount?: number;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  unreadCount = 0,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <HeaderIconButton
      icon={
        <div className="relative">
          <FiBell className="size-5 text-slate-700 dark:text-slate-200" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </div>
      }
      onClick={() => setShowNotifications(!showNotifications)}
      dropdown={
        showNotifications && (
          <DropdownMenu>
            <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <DropdownItem>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">New Message</span>
                  <span className="text-sm text-slate-500">
                    You have a new message from John
                  </span>
                  <span className="text-xs text-slate-400">2 minutes ago</span>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">System Update</span>
                  <span className="text-sm text-slate-500">
                    System maintenance scheduled
                  </span>
                  <span className="text-xs text-slate-400">1 hour ago</span>
                </div>
              </DropdownItem>
            </div>
          </DropdownMenu>
        )
      }
    />
  );
};
