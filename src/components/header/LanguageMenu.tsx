import { FiGlobe } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import HeaderIconButton from "./HeaderIconButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";

interface LanguageMenuProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({
  showMenu,
  setShowMenu,
}) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <HeaderIconButton
      icon={<FiGlobe className="size-5 text-slate-700 dark:text-slate-200" />}
      onClick={() => setShowMenu(!showMenu)}
      dropdown={
        showMenu && (
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                if (language === "ar") {
                  toggleLanguage();
                }
                setShowMenu(false);
              }}
            >
              English
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                if (language === "en") {
                  toggleLanguage();
                }
                setShowMenu(false);
              }}
            >
              العربية
            </DropdownItem>
          </DropdownMenu>
        )
      }
    />
  );
};

export default LanguageMenu;
