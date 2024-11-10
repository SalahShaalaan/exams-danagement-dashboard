import { topStudents } from "./dashboardData";

interface TopStudentsProps {
  t: Record<string, string>;
  language: string;
}

const TopStudents: React.FC<TopStudentsProps> = ({ t, language }) => (
  <div className="w-1/2 ml-auto">
    <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-purple-900/20 rounded-3xl shadow-lg overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 dark:bg-purple-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      {/* Header */}
      <div className="relative p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          {t.topStudents}
        </h2>
        <div className="mt-1 h-1 w-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full"></div>
      </div>

      {/* Students Grid */}
      <div className="relative p-8 pt-0 grid gap-4">
        {topStudents.map((student, index) => (
          <div
            key={index}
            className="group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl border border-white/20 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6">
              {/* Avatar Circle */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                {(language === "en" ? student.nameEn : student.nameAr).charAt(
                  0
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">
                    {language === "en" ? student.nameEn : student.nameAr}
                  </h3>
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-indigo-500 dark:bg-indigo-400 blur-sm opacity-20 rounded-full"></div>
                    <span className="relative px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      GPA: {student.gpa}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 truncate group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {student.email}
                </p>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-x-0 -bottom-px h-1 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TopStudents;
