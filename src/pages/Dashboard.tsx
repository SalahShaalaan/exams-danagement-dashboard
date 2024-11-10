import { useLanguage } from "../context/LanguageContext";
import {
  dashboardData,
  translations,
} from "../components/dashboard/dashboardData";
import DashboardCard from "../components/dashboard/DashboardCard";
import TopStudents from "../components/dashboard/TopStudents";
import UpcomingExams from "../components/dashboard/UpcomingExams";
const Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative p-4 rounded-lg text-slate-300">
      <h1 className="font-bold text-3xl leading-wider mb-8 text-darkText dark:text-slate-200 text-center">
        {t.dashboard}
      </h1>
      <div className="grid grid-cols-auto-fit-250 gap-6 mb-8">
        {dashboardData.map((card) => (
          <DashboardCard
            key={card.title}
            title={t[card.title]}
            number={card.number}
            arrow={card.arrow}
            percentage={card.percentage}
            period={t[card.period]}
            icon={card.icon}
            iconBgColor={card.iconBgColor}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <TopStudents t={t} language={language} />
        <UpcomingExams t={t} />
      </div>
    </div>
  );
};

export default Dashboard;
