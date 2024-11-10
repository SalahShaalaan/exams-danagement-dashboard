import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarGrid from "../components/calendar/CalendarGrid";
import ExamForm from "../components/calendar/ExamForm";
import ExamCard from "../components/calendar/ExamCard";
import { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isAfter,
  isBefore,
  startOfDay,
  addMonths,
  subMonths,
} from "date-fns";

import { useLanguage } from "../context/LanguageContext";

interface Exam {
  id: string;
  date: Date;
  subject: string;
  time: string;
  completed?: boolean;
}

const subjects = {
  ar: [
    "الرياضيات",
    "العلوم",
    "اللغة العربية",
    "اللغة الإنجليزية",
    "التاريخ",
    "الجغرافيا",
  ],
  en: ["Mathematics", "Science", "Arabic", "English", "History", "Geography"],
};

export default function Calendar() {
  const { language } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [exams, setExams] = useState<Exam[]>([]);
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newExam, setNewExam] = useState<Omit<Exam, "id">>({
    date: new Date(),
    subject: "",
    time: "",
  });

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const today = startOfDay(new Date());

  useEffect(() => {
    const pastExams = monthDays
      .filter((day) => isBefore(day, today))
      .slice(0, 5)
      .map((day) => ({
        id: Math.random().toString(36).substr(2, 9),
        date: day,
        subject:
          subjects[language][
            Math.floor(Math.random() * subjects[language].length)
          ],
        time: `${Math.floor(Math.random() * 12) + 1}:00`,
        completed: true,
      }));

    setExams(pastExams);
  }, [currentDate, language]);

  const handleDateClick = (date: Date) => {
    const clickedExam = exams.find((exam) => isSameDay(exam.date, date));
    if (clickedExam) {
      setSelectedExam(clickedExam);
    } else if (isAfter(date, today) || isSameDay(date, today)) {
      setShowForm(true);
      setNewExam({ ...newExam, date });
    }
  };

  const handleExamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExamWithId = {
      ...newExam,
      id: Math.random().toString(36).substr(2, 9),
    };
    setExams([...exams, newExamWithId]);
    setShowForm(false);
    setNewExam({ date: new Date(), subject: "", time: "" });
  };

  const handleMonthChange = (increment: number) => {
    setCurrentDate((prevDate) =>
      increment > 0 ? addMonths(prevDate, 1) : subMonths(prevDate, 1)
    );
  };

  return (
    <div className="w-full mx-auto bg-[#273142] shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <CalendarHeader
          currentDate={currentDate}
          handleMonthChange={handleMonthChange}
        />
        <CalendarGrid
          monthDays={monthDays}
          exams={exams}
          handleDateClick={handleDateClick}
          today={today}
        />
        {showForm && (
          <ExamForm
            newExam={newExam}
            setNewExam={setNewExam}
            handleExamSubmit={handleExamSubmit}
            setShowForm={setShowForm}
          />
        )}
        {selectedExam && (
          <ExamCard exam={selectedExam} onClose={() => setSelectedExam(null)} />
        )}
      </div>
    </div>
  );
}
