import { FiMoon, FiSun } from "react-icons/fi";
import HeaderIconButton from "./HeaderIconButton";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <HeaderIconButton
      icon={
        isDark ? (
          <FiMoon className="size-5 text-slate-700 dark:text-slate-200" />
        ) : (
          <FiSun className="size-5 text-slate-700 dark:text-slate-200" />
        )
      }
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggle;
