import { format, isSameDay, isBefore } from "date-fns";
import { ar, enUS } from "date-fns/locale";
import { useLanguage } from "../../context/LanguageContext";

interface Exam {
  id: string;
  date: Date;
  subject: string;
  time: string;
  completed?: boolean;
}

interface CalendarGridProps {
  monthDays: Date[];
  exams: Exam[];
  handleDateClick: (date: Date) => void;
  today: Date;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  monthDays,
  exams,
  handleDateClick,
  today,
}) => {
  const { language } = useLanguage();

  const weekDays = {
    ar: [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };

  const translations = {
    ar: {
      completed: "تم الانتهاء منه",
    },
    en: {
      completed: "Completed",
    },
  };

  const getExamsForDay = (day: Date) => {
    return exams.filter((exam) => isSameDay(exam.date, day));
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[320px] p-2 sm:p-4 md:p-6 bg-white dark:bg-secDarkBg rounded-xl">
        <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-4">
          {/* Weekday headers */}
          {weekDays[language].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base p-1 sm:p-2"
            >
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {monthDays.map((day) => {
            const dayExams = getExamsForDay(day);
            const isToday = isSameDay(day, today);
            const isPast = isBefore(day, today);

            return (
              <div
                key={day.toISOString()}
                className={`relative min-h-[80px] sm:min-h-[100px] md:min-h-[120px] p-1 sm:p-2 border dark:border-slate-700 rounded-lg transition-colors
                  ${
                    isPast
                      ? "bg-slate-50 dark:bg-slate-800/50"
                      : "cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }
                  ${
                    isToday
                      ? "border-blue-500 dark:border-blue-500"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                onClick={() => handleDateClick(day)}
              >
                <div
                  className={`text-right mb-1 sm:mb-2 text-xs sm:text-sm ${
                    isPast
                      ? "text-gray-500"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {format(day, "d", { locale: language === "ar" ? ar : enUS })}
                </div>
                <div className="space-y-1">
                  {dayExams.map((exam) => (
                    <div
                      key={exam.id}
                      className={`p-1 sm:p-2 rounded-md text-xs sm:text-sm ${
                        exam.completed
                          ? "bg-green-100 text-green-800"
                          : "bg-cyan-600 text-slate-200"
                      }`}
                    >
                      <div className="font-semibold truncate">
                        {exam.subject}
                      </div>
                      <div className="text-xs hidden sm:block">{exam.time}</div>
                      {exam.completed && (
                        <div className="text-xs font-semibold mt-1 hidden sm:block">
                          {translations[language].completed}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;
