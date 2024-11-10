import { useLanguage } from "../../context/LanguageContext";

interface DropdownItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  icon,
  children,
  className = "",
  onClick,
}) => {
  const { language } = useLanguage();

  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 text-${
        language === "ar" ? "right" : "left"
      } text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-2 transition-colors ${
        language === "ar" ? "flex-row-reverse" : ""
      } ${className}`}
    >
      {icon && (
        <div className="w-4 h-4 text-slate-700 dark:text-slate-400">{icon}</div>
      )}
      <span>{children}</span>
    </button>
  );
};
export default DropdownItem;
