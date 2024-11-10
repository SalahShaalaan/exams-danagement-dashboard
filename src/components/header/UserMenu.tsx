import { FiUser, FiMail, FiList, FiSettings, FiLogOut } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "./translations";
import HeaderIconButton from "./HeaderIconButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";

interface UserMenuProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  handleLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
  showMenu,
  setShowMenu,
  handleLogout,
}) => {
  const { language } = useLanguage();
  const t = translations[language];
  const userRole = localStorage.getItem("userRole");
  const username = localStorage.getItem("username") || "User";

  return (
    <HeaderIconButton
      icon={<FiUser className="size-5 text-slate-700 dark:text-slate-200" />}
      onClick={() => setShowMenu(!showMenu)}
      dropdown={
        showMenu && (
          <DropdownMenu>
            <DropdownItem icon={<FiUser />}>
              {username} ({userRole})
            </DropdownItem>
            <DropdownItem icon={<FiMail />}>{t.inbox}</DropdownItem>
            <DropdownItem icon={<FiList />}>{t.taskManager}</DropdownItem>
            <DropdownItem icon={<FiSettings />}>{t.settings}</DropdownItem>
            <DropdownItem
              icon={<FiLogOut />}
              className="text-red-600"
              onClick={handleLogout}
            >
              {t.logout}
            </DropdownItem>
          </DropdownMenu>
        )
      }
    />
  );
};

export default UserMenu;
