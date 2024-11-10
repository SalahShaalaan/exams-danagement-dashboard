import { useLanguage } from "../../context/LanguageContext";
import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";

interface CalendarHeaderProps {
  currentDate: Date;
  handleMonthChange: (increment: number) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  handleMonthChange,
}) => {
  const { language } = useLanguage();

  const translations = {
    ar: {
      previousMonth: "الشهر الماضي",
      nextMonth: "الشهر التالي",
    },
    en: {
      previousMonth: "Previous Month",
      nextMonth: "Next Month",
    },
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <button
        onClick={() => handleMonthChange(-1)}
        className="w-full sm:w-auto px-4 py-2 bg-cyan-600  hover:bg-cyan-800 text-white rounded-lg transition-colors shadow-sm"
      >
        {language === "ar"
          ? `${translations.ar.previousMonth} ←`
          : `← ${translations.en.previousMonth}`}
      </button>
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-100 dark:text-slate-200 order-first sm:order-none">
        {format(currentDate, "MMMM yyyy", {
          locale: language === "ar" ? ar : enUS,
        })}
      </h2>
      <button
        onClick={() => handleMonthChange(1)}
        className="w-full sm:w-auto px-4 py-2 bg-cyan-600  hover:bg-cyan-800 text-white rounded-lg transition-colors shadow-sm"
      >
        {language === "ar"
          ? `${translations.ar.nextMonth} →`
          : `${translations.en.nextMonth} →`}
      </button>
    </div>
  );
};

export default CalendarHeader;
