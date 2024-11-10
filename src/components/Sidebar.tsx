import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    projectTitle: "Exams Project",
    home: "Home",
    basic: "Basic",
    pages: "Pages",
    students: "Students",
    calendar: "Calendar",
    printResults: "Print Results",
    admins: "Admins",
  },
  ar: {
    projectTitle: "مشروع الامتحانات",
    home: "الصفحه الرئيسيه",
    basic: "أساسي",
    pages: "الصفحات",
    students: "الطلاب",
    calendar: "التقويم",
    printResults: "طباعة وإصدار النتائج",
    admins: "المشرفون",
  },
};

const pages = [
  {
    title: "students",
    roles: ["admin", "superadmin"],
    path: "/students",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "calendar",
    roles: ["admin", "superadmin"],
    path: "/calendar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    title: "printResults",
    roles: ["admin", "superadmin"],
    path: "/print-results",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
        />
      </svg>
    ),
  },
  {
    title: "admins",
    roles: ["superadmin"],
    path: "/admins",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const userRole = localStorage.getItem("userRole");
  const { language } = useLanguage();
  const t = translations[language];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const filteredPages = pages.filter((page) =>
    page.roles.includes(userRole || "")
  );

  return (
    <aside
      className={`h-screen fixed md:static top-0 mt-2 z-50 ${
        language === "ar" ? "right-0" : "left-0"
      } w-64 bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 ${
        isOpen
          ? "translate-x-0"
          : language === "ar"
          ? "translate-x-56"
          : "-translate-x-56"
      }`}
    >
      <div className="text-center p-5 border-b border-slate-200 dark:border-slate-700">
        <h1 className="font-black text-2xl text-slate-800 dark:text-slate-200">
          {t.projectTitle}
        </h1>
      </div>
      <button
        className={`absolute top-1/2 -translate-y-1/2 ${
          language === "ar" ? "-left-4" : "-right-4"
        } bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-2 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              language === "ar"
                ? "M15.75 19.5L8.25 12l7.5-7.5"
                : "M8.25 4.5l7.5 7.5-7.5 7.5"
            }
          />
        </svg>
      </button>
      <nav className="p-5 text-slate-700 dark:text-slate-200">
        <span className="block text-slate-500 dark:text-slate-400 text-base uppercase mb-6 font-bold">
          {t.basic}
        </span>
        <Link
          to="/"
          className="flex items-center gap-4 font-semibold p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          {t.home}
        </Link>
        <ul className="mt-8 space-y-8">
          <span className="block text-slate-500 dark:text-slate-400 text-base uppercase mb-6 font-bold">
            {t.pages}
          </span>
          {filteredPages.map((page) => (
            <li key={page.title}>
              <Link
                to={page.path}
                className="flex items-center gap-4 font-semibold p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                {page.icon}
                {t[page.title]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
