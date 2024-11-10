import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "./data";

type Student = {
  id: number;
  nameAr: string;
  nameEn: string;
  subject: string;
  examDate: string;
  examTime: string;
  result: string;
};

type StudentsTableProps = {
  students: Student[];
};

export const StudentsTable = ({ students }: StudentsTableProps) => {
  const { language, direction } = useLanguage();

  if (students.length === 0) {
    return (
      <div className="text-center py-8">{TRANSLATIONS[language].noResults}</div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table
        className="w-full bg-white dark:bg-secDarkBg table-auto"
        dir={direction}
      >
        <thead className="text-sm">
          <tr className="text-slate-700 dark:text-slate-200 font-semibold">
            <th className="px-4 py-2 text-start border border-slate-200 dark:border-slate-700 ">
              {language === "ar" ? "الاسم" : "Name"}
            </th>
            <th className="px-4 py-2 text-start border border-slate-200 dark:border-slate-700">
              {TRANSLATIONS[language].subject}
            </th>
            <th className="px-4 py-2 text-start border border-slate-200 dark:border-slate-700">
              {TRANSLATIONS[language].examDate}
            </th>
            <th className="px-4 py-2 text-start border border-slate-200 dark:border-slate-700">
              {TRANSLATIONS[language].examTime}
            </th>
            <th className="px-4 py-2 text-start border border-slate-200 dark:border-slate-700">
              {TRANSLATIONS[language].result}
            </th>
          </tr>
        </thead>
        <tbody className="font-light text-base">
          {students.map((student) => (
            <tr
              key={student.id}
              className="hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <td className="px-4 py-2 border border-slate-200 dark:border-slate-700">
                {language === "ar" ? student.nameAr : student.nameEn}
              </td>
              <td className="px-4 py-2 border border-slate-200 dark:border-slate-700">
                {student.subject}
              </td>
              <td className="px-4 py-2 border border-slate-200 dark:border-slate-700">
                {student.examDate}
              </td>
              <td className="px-4 py-2 border border-slate-200 dark:border-slate-700">
                {student.examTime}
              </td>
              <td className="px-4 py-2 border border-slate-200 dark:border-slate-700">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    student.result === "ناجح"
                      ? " text-emerald-400"
                      : " text-orange-700"
                  }`}
                >
                  {student.result}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
