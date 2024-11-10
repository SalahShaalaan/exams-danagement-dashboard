import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "./translations";
import LanguageMenu from "./LanguageMenu";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import { useTheme } from "../../context/ThemeContext";
import { NotificationButton } from "./NotificationButton";

const Header: React.FC = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const t = translations[language];

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <header className="relative h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 flex items-center justify-between z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder={t.search}
            disabled
            className={`w-64 px-4 py-2 ${
              language === "ar" ? "pr-10" : "pl-10"
            } rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all`}
          />
          <FiSearch
            className={`absolute ${
              language === "ar" ? "right-3" : "left-3"
            } top-1/2 -translate-y-1/2 size-5 text-slate-400 dark:text-slate-500`}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-white">
        <NotificationButton unreadCount={3} />
        <LanguageMenu showMenu={showLangMenu} setShowMenu={setShowLangMenu} />
        <ThemeToggle isDark={theme === "dark"} toggleTheme={toggleTheme} />
        <UserMenu
          showMenu={showUserMenu}
          setShowMenu={setShowUserMenu}
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
