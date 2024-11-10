import { useLanguage } from "../../context/LanguageContext";

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const { language } = useLanguage();

  return (
    <div
      className={`absolute ${
        language === "ar" ? "left-0" : "right-0"
      } mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 text-slate-700 transition-all duration-200`}
    >
      <div className="py-1">{children}</div>
    </div>
  );
};

export default DropdownMenu;
