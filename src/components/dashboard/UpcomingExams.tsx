import { upcomingExams } from "./dashboardData";

interface UpcomingExamsProps {
  t: Record<string, string>;
}

const UpcomingExams: React.FC<UpcomingExamsProps> = ({ t }) => (
  <div className="w-1/2">
    <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-900/20 rounded-3xl shadow-lg overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/20 dark:bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      {/* Header */}
      <div className="relative p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
          {t.upcomingExams}
        </h2>
        <div className="mt-1 h-1 w-16 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded-full"></div>
      </div>

      {/* Exams List */}
      <div className="relative p-8 pt-0 space-y-4">
        {upcomingExams.map((exam, index) => (
          <div
            key={index}
            className="group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl border border-white/20 dark:border-slate-700/50"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {t[exam.name]}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {exam.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {exam.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Countdown Circle */}
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {index + 1}
                      </span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">
                        days
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ width: `${(index + 1) * 25}%` }}
                ></div>
              </div>
            </div>

            {/* Side Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-l-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UpcomingExams;
