import { useLanguage } from "../../context/LanguageContext";
import { format, parseISO } from "date-fns";

interface ExamFormProps {
  newExam: {
    date: Date;
    subject: string;
    time: string;
  };
  setNewExam: React.Dispatch<
    React.SetStateAction<{
      date: Date;
      subject: string;
      time: string;
    }>
  >;
  handleExamSubmit: (e: React.FormEvent) => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExamForm: React.FC<ExamFormProps> = ({
  newExam,
  setNewExam,
  handleExamSubmit,
  setShowForm,
}) => {
  const { language } = useLanguage();

  const translations = {
    ar: {
      addNewExam: "إضافة اختبار جديد",
      examDate: "تاريخ الاختبار",
      subjectName: "اسم المادة",
      examTime: "وقت الاختبار",
      cancel: "إلغاء",
      save: "حفظ",
      enterSubjectName: "أدخل اسم المادة",
    },
    en: {
      addNewExam: "Add New Exam",
      examDate: "Exam Date",
      subjectName: "Subject Name",
      examTime: "Exam Time",
      cancel: "Cancel",
      save: "Save",
      enterSubjectName: "Enter subject name",
    },
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h3 className="text-2xl font-bold text-right mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {translations[language].addNewExam}
        </h3>

        <form onSubmit={handleExamSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 text-right">
              {translations[language].examDate}
            </label>
            <input
              type="date"
              value={format(newExam.date, "yyyy-MM-dd")}
              onChange={(e) =>
                setNewExam({ ...newExam, date: parseISO(e.target.value) })
              }
              className="w-full p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-right text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              min={format(new Date(), "yyyy-MM-dd")}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 text-right">
              {translations[language].subjectName}
            </label>
            <input
              type="text"
              value={newExam.subject}
              onChange={(e) =>
                setNewExam({ ...newExam, subject: e.target.value })
              }
              className="w-full p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-right text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              placeholder={translations[language].enterSubjectName}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 text-right">
              {translations[language].examTime}
            </label>
            <input
              type="time"
              value={newExam.time}
              onChange={(e) => setNewExam({ ...newExam, time: e.target.value })}
              className="w-full p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-right text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 transition-all duration-200 font-medium text-sm"
            >
              {translations[language].cancel}
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl transition-all duration-200 font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
            >
              {translations[language].save}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExamForm;
