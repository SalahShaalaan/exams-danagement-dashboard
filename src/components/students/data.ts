const STUDENTS_DATA = [
  {
    id: 1,
    nameAr: "محمد أحمد",
    nameEn: "Mohammed Ahmed",
    subject: "الرياضيات",
    examDate: "2024-09-15",
    examTime: "09:00",
    result: "ناجح",
  },
  {
    id: 2,
    nameAr: "فاطمة علي",
    nameEn: "Fatima Ali",
    subject: "العلوم",
    examDate: "2024-09-16",
    examTime: "10:40",
    result: "راسب",
  },
  {
    id: 3,
    nameAr: "علي محمد",
    nameEn: "Ali Mohammed",
    subject: "اللغة العربية",
    examDate: "2024-09-17",
    examTime: "14:00",
    result: "ناجح",
  },
  {
    id: 4,
    nameAr: "سارة محمد",
    nameEn: "Sara Mohammed",
    subject: "اللغة الإنجليزية",
    examDate: "2024-09-18",
    examTime: "11:00",
    result: "راسب",
  },
  {
    id: 5,
    nameAr: "محمد علي",
    nameEn: "Mohammed Ali",
    subject: "التاريخ",
    examDate: "2024-09-19",
    examTime: "14:00",
    result: "ناجح",
  },
  {
    id: 6,
    nameAr: "خالد حسين",
    nameEn: "Khaled Hussein",
    subject: "الكيمياء",
    examDate: "2024-09-20",
    examTime: "10:00",
    result: "راسب",
  },
  {
    id: 7,
    nameAr: "نور محمود",
    nameEn: "Noor Mahmoud",
    subject: "الفيزياء",
    examDate: "2024-09-21",
    examTime: "12:00",
    result: "ناجح",
  },
  {
    id: 8,
    nameAr: "أمل سمير",
    nameEn: "Amal Samir",
    subject: "الرياضيات",
    examDate: "2024-09-22",
    examTime: "09:00",
    result: "ناجح",
  },
  {
    id: 9,
    nameAr: "يوسف خالد",
    nameEn: "Youssef Khaled",
    subject: "العلوم",
    examDate: "2024-09-24",
    examTime: "11:00",
    result: "راسب",
  },
  {
    id: 10,
    nameAr: "ريم محمد",
    nameEn: "Reem Mohammed",
    subject: "اللغة العربية",
    examDate: "2024-09-24",
    examTime: "14:00",
    result: "ناجح",
  },
  {
    id: 11,
    nameAr: "أحمد سعيد",
    nameEn: "Ahmed Saeed",
    subject: "اللغة الإنجليزية",
    examDate: "2024-09-25",
    examTime: "10:00",
    result: "راسب",
  },
  {
    id: 12,
    nameAr: "سامي عبد الله",
    nameEn: "Sami Abdallah",
    subject: "التاريخ",
    examDate: "2024-09-26",
    examTime: "14:00",
    result: "ناجح",
  },
  {
    id: 13,
    nameAr: "نهى علي",
    nameEn: "Noha Ali",
    subject: "الكيمياء",
    examDate: "2024-09-27",
    examTime: "09:00",
    result: "راسب",
  },
  {
    id: 14,
    nameAr: "كريم محمد",
    nameEn: "Karim Mohammed",
    subject: "الفيزياء",
    examDate: "2024-09-28",
    examTime: "12:00",
    result: "ناجح",
  },
  {
    id: 15,
    nameAr: "منى عادل",
    nameEn: "Mona Adel",
    subject: "الرياضيات",
    examDate: "2024-09-29",
    examTime: "10:00",
    result: "ناجح",
  },
  {
    id: 16,
    nameAr: "هاجر سمير",
    nameEn: "Hager Samir",
    subject: "العلوم",
    examDate: "2024-09-40",
    examTime: "09:40",
    result: "راسب",
  },
  {
    id: 17,
    nameAr: "عمر يوسف",
    nameEn: "Omar Youssef",
    subject: "اللغة العربية",
    examDate: "2024-09-41",
    examTime: "14:00",
    result: "ناجح",
  },
  {
    id: 18,
    nameAr: "لبنى أحمد",
    nameEn: "Lobna Ahmed",
    subject: "اللغة الإنجليزية",
    examDate: "2024-09-01",
    examTime: "11:00",
    result: "راسب",
  },
  {
    id: 19,
    nameAr: "إبراهيم محمود",
    nameEn: "Ibrahim Mahmoud",
    subject: "التاريخ",
    examDate: "2024-06-02",
    examTime: "14:00",
    result: "ناجح",
  },
  {
    id: 20,
    nameAr: "هند عادل",
    nameEn: "Hend Adel",
    subject: "الكيمياء",
    examDate: "2024-06-04",
    examTime: "10:00",
    result: "راسب",
  },
];

const SUBJECTS = [
  "الرياضيات",
  "العلوم",
  "اللغة العربية",
  "اللغة الإنجليزية",
  "التاريخ",
  "الجغرافيا",
];

const TRANSLATIONS = {
  en: {
    title: "Exam Results",
    searchPlaceholder: "Search for a student",
    subject: "Subject",
    result: "Result",
    resetFilters: "Reset Filters",
    pass: "Pass",
    fail: "Fail",
    noResults: "No students match the search criteria",
    examDate: "Exam Date",
    examTime: "Exam Time",
  },
  ar: {
    title: "نتائج الامتحانات",
    searchPlaceholder: "البحث عن طالب",
    subject: "المادة",
    result: "النتيجة",
    resetFilters: "إعادة تعيين",
    pass: "ناجح",
    fail: "راسب",
    noResults: "لا يوجد طلاب مطابقين لمعايير البحث",
    examDate: "تاريخ الامتحان",
    examTime: "وقت الامتحان",
  },
};
export { STUDENTS_DATA, SUBJECTS, TRANSLATIONS };