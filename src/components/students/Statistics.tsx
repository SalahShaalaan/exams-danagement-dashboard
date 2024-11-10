import { useLanguage } from "../../context/LanguageContext";

export default function Statistics({ statistics }) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
        <div
          className={`absolute ${
            isRTL ? "left-0 -ml-4" : "right-0 -mr-4"
          } top-0 w-20 h-20 -mt-4 bg-blue-500/10 rounded-full transition-transform duration-300 group-hover:scale-110`}
        ></div>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-blue-500/10 rounded-xl inline-block mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
            {statistics.total}
          </div>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {language === "ar" ? "إجمالي الطلاب" : "Total Students"}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
        <div
          className={`absolute ${
            isRTL ? "left-0 -ml-4" : "right-0 -mr-4"
          } top-0 w-20 h-20 -mt-4 bg-emerald-500/10 rounded-full transition-transform duration-300 group-hover:scale-110`}
        ></div>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-emerald-500/10 rounded-xl inline-block mb-4">
            <svg
              className="w-8 h-8 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            {statistics.passing}
          </div>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {language === "ar" ? "ناجح" : "Passing"}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
        <div
          className={`absolute ${
            isRTL ? "left-0 -ml-4" : "right-0 -mr-4"
          } top-0 w-20 h-20 -mt-4 bg-orange-500/10 rounded-full transition-transform duration-300 group-hover:scale-110`}
        ></div>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-orange-500/10 rounded-xl inline-block mb-4">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
            {statistics.failing}
          </div>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {language === "ar" ? "راسب" : "Failing"}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
        <div
          className={`absolute ${
            isRTL ? "left-0 -ml-4" : "right-0 -mr-4"
          } top-0 w-20 h-20 -mt-4 bg-cyan-500/10 rounded-full transition-transform duration-300 group-hover:scale-110`}
        ></div>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-cyan-500/10 rounded-xl inline-block mb-4">
            <svg
              className="w-8 h-8 text-cyan-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            {statistics.passRate}%
          </div>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {language === "ar" ? "نسبة النجاح" : "Pass Rate"}
          </div>
        </div>
      </div>
    </div>
  );
}
