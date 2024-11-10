import { Student } from "./types";

interface ResultsTableProps {
  filteredStudents: Student[];
  selectedStudents: number[];
  toggleStudentSelection: (id: number) => void;
  language: string;
  translations: any;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  filteredStudents,
  selectedStudents,
  toggleStudentSelection,
  language,
  translations: t,
}) => {
  return (
    <table className="min-w-full bg-white dark:bg-slate-800 table-auto">
      <thead>
        <tr className="bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 uppercase text-sm leading-normal border-b border-slate-200 dark:border-slate-600">
          <th className="py-3 px-6 text-right">{t.studentName}</th>
          <th className="py-3 px-6 text-right">{t.subject}</th>
          <th className="py-3 px-6 text-right">{t.examDate}</th>
          <th className="py-3 px-6 text-right">{t.examTime}</th>
          <th className="py-3 px-6 text-right">{t.result}</th>
          <th className="py-3 px-6 text-center">{t.select}</th>
        </tr>
      </thead>
      <tbody className="text-slate-700 dark:text-slate-300 text-sm font-light">
        {filteredStudents.map((student) => (
          <tr
            key={student.id}
            className="border-b border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <td className="py-3 px-6 text-right whitespace-nowrap">
              {language === "en" ? student.nameEn : student.nameAr}
            </td>
            <td className="py-3 px-6 text-right whitespace-nowrap">
              {student.subject}
            </td>
            <td className="py-3 px-6 text-right whitespace-nowrap">
              {student.examDate}
            </td>
            <td className="py-3 px-6 text-right whitespace-nowrap">
              {student.examTime}
            </td>
            <td className="py-3 px-6 text-right whitespace-nowrap">
              <span
                className={`${
                  student.result === "ناجح"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-rose-600 dark:text-rose-400"
                } font-medium`}
              >
                {student.result}
              </span>
            </td>
            <td className="py-3 px-6 text-center">
              <input
                type="checkbox"
                checked={selectedStudents.includes(student.id)}
                onChange={() => toggleStudentSelection(student.id)}
                className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 border-slate-300 dark:border-slate-600 rounded"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
