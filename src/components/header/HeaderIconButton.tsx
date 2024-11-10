interface HeaderIconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  dropdown?: React.ReactNode;
}

const HeaderIconButton: React.FC<HeaderIconButtonProps> = ({
  icon,
  onClick,
  dropdown,
}) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="p-2 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
      >
        {icon}
      </button>
      {dropdown}
    </div>
  );
};

export default HeaderIconButton;
