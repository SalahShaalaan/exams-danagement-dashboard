import students from "../../../public/students.png"
import revenu from "../../../public/revenu.png"
import test from "../../../public/test.png"
import clock from "../../../public/clock.png"

export type Language = 'en' | 'ar';

export type TranslationKey = keyof typeof translations.en;

interface DashboardItem {
  title: TranslationKey;
  number: string;
  arrow: boolean;
  percentage: string;
  period: TranslationKey;
  iconBgColor: string;
  icon: string;
}

export const dashboardData: DashboardItem[] = [
  {
    title: "studentCount",
    number: "400",
    arrow: true,
    percentage: "8.5%",
    period: "thisMonth",
    iconBgColor: "bg-[#e4e4ff]",
    icon: students,
  },
  {
    title: "totalRequests",
    number: "800",
    arrow: true,
    percentage: "1.3%",
    period: "thisWeek",
    iconBgColor: "bg-[#fef2d6]",
    icon: revenu,
  },
  {
    title: "totalExams",
    number: "250",
    arrow: false,
    percentage: "4.3%",
    period: "thisYear",
    iconBgColor: "bg-[#d9f7e7]",
    icon: test,
  },
  {
    title: "pendingRequests",
    number: "1,000",
    arrow: true,
    percentage: "1.8%",
    period: "increasedFromYesterday",
    iconBgColor: "bg-[#ffded2]",
    icon: clock,
  },
];

export const translations = {
  en: {
    dashboard: "Dashboard",
    topStudents: "Top Students",
    upcomingExams: "Upcoming Exams",
    studentCount: "Student Count",
    totalRequests: "Total Requests",
    totalExams: "Total Exams",
    pendingRequests: "Pending Requests",
    thisMonth: "This Month",
    thisWeek: "This Week",
    thisYear: "This Year",
    increasedFromYesterday: "Increased from yesterday",
    date: "Date",
    time: "Time",
    advancedMath: "Advanced Mathematics",
    modernPhysics: "Modern Physics",
    computerScience: "Computer Science",
    arabicLanguage: "Arabic Language",
  },
  ar: {
    dashboard: "لوحة التحكم",
    topStudents: "أفضل الطلاب",
    upcomingExams: "الاختبارات القادمة",
    studentCount: "عدد الطلاب",
    totalRequests: "مجموع الطلبات",
    totalExams: "مجموع الامتحانات",
    pendingRequests: "الطلبات المعلقه",
    thisMonth: "هذا الشهر",
    thisWeek: "هذا الاسبوع",
    thisYear: "هذه السنه",
    increasedFromYesterday: "متصاعد من الامس",
    date: "التاريخ",
    time: "الوقت",
    advancedMath: "الرياضيات المتقدمة",
    modernPhysics: "الفيزياء الحديثة",
    computerScience: "علوم الحاسب",
    arabicLanguage: "اللغة العربية",
  },
};

interface Student {
  nameEn: string;
  nameAr: string;
  email: string;
  gpa: number;
}

export const topStudents: Student[] = [
  {
    nameEn: "Ahmed Mohamed",
    nameAr: "أحمد محمد",
    email: "ahmed@example.com",
    gpa: 3.9,
  },
  {
    nameEn: "Sara Ali",
    nameAr: "سارة علي",
    email: "sara@example.com",
    gpa: 3.8,
  },
  {
    nameEn: "Mahmoud Khaled",
    nameAr: "محمود خالد",
    email: "mahmoud@example.com",
    gpa: 3.7,
  },
  {
    nameEn: "Fatima Ahmed",
    nameAr: "فاطمة أحمد",
    email: "fatima@example.com",
    gpa: 3.6,
  },
  {
    nameEn: "Ali Hassan",
    nameAr: "علي حسن",
    email: "ali@example.com",
    gpa: 3.5,
  },
  {
    nameEn: "Nour El-Din",
    nameAr: "نور الدين",
    email: "nour@example.com",
    gpa: 3.4,
  },
  {
    nameEn: "Youssef Ali",
    nameAr: "يوسف علي",
    email: "youssef@example.com",
    gpa: 3.3,
  },
  {
    nameEn: "Mohamed Salah",
    nameAr: "محمد صلاح",
    email: "mohamedsalah@example.com",
    gpa: 3.1,
  },
  
];

interface Exam {
  name: TranslationKey;
  date: string;
  time: string;
}

export const upcomingExams: Exam[] = [
  { name: "advancedMath", date: "2024-11-1", time: "10:00 AM" },
  { name: "modernPhysics", date: "2024-11-8", time: "11:30 AM" },
  { name: "computerScience", date: "2024-11-14", time: "09:00 AM" },
  { name: "arabicLanguage", date: "2024-11-22", time: "10:30 AM" },
];

