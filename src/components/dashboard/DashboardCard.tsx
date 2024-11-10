interface DashboardCardProps {
  title: string;
  number: string | number;
  percentage: string;
  period: string;
  arrow: boolean;
  icon: string;
  iconBgColor: string;
}

const ArrowUp: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    />
  </svg>
);

const ArrowDown: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
    />
  </svg>
);

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  number,
  percentage,
  period,
  arrow,
  icon,
  iconBgColor,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-start">
        <div className="space-y-4 flex-1">
          <h4 className="text-base font-medium text-slate-600 dark:text-slate-400">
            {title}
          </h4>
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {number}
          </p>
          <div className="flex items-center gap-3">
            <span
              className={`flex items-center gap-1 text-sm font-semibold ${
                arrow
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-rose-600 dark:text-rose-400"
              }`}
            >
              {arrow ? <ArrowUp /> : <ArrowDown />}
              {percentage}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {period}
            </span>
          </div>
        </div>
        <div
          className={`${iconBgColor} bg-opacity-10 dark:bg-opacity-20 p-4 rounded-2xl`}
        >
          <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-br from-slate-100 to-transparent dark:from-slate-700 dark:to-transparent rounded-full opacity-50"></div>
    </div>
  );
};

export default DashboardCard;
