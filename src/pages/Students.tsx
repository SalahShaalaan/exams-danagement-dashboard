import { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { STUDENTS_DATA, TRANSLATIONS } from "../components/students/data";
import { SearchBar } from "../components/students/SearchBar";
import { FilterSection } from "../components/students/FilterSection";
import { StudentsTable } from "../components/students/StudentsTable";
import Statistics from "../components/students/Statistics";

export default function Students() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedResult, setSelectedResult] = useState("");

  const filteredStudents = useMemo(() => {
    return STUDENTS_DATA.filter((student) => {
      const searchMatch =
        searchQuery.trim() === "" ||
        (language === "ar" ? student.nameAr : student.nameEn)
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim());

      const subjectMatch =
        selectedSubject === "" || student.subject === selectedSubject;

      const resultMatch =
        selectedResult === "" || student.result === selectedResult;

      return searchMatch && subjectMatch && resultMatch;
    });
  }, [searchQuery, selectedSubject, selectedResult, language]);

  const sortedStudents = useMemo(() => {
    return [...filteredStudents].sort((a, b) => {
      const dateA = new Date(a.examDate + "T" + a.examTime);
      const dateB = new Date(b.examDate + "T" + b.examTime);
      return dateA.getTime() - dateB.getTime();
    });
  }, [filteredStudents]);

  const statistics = useMemo(() => {
    const total = sortedStudents.length;
    const passing = sortedStudents.filter((s) => s.result === "ناجح").length;
    const failing = sortedStudents.filter((s) => s.result === "راسب").length;

    return {
      total,
      passing,
      failing,
      passRate: total > 0 ? ((passing / total) * 100).toFixed(1) : "0",
    };
  }, [sortedStudents]);

  const resetFilters = () => {
    setSelectedSubject("");
    setSelectedResult("");
    setSearchQuery("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-darkText dark:text-slate-200">
        {TRANSLATIONS[language].title}
      </h1>

      <Statistics statistics={statistics} />

      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <FilterSection
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          selectedResult={selectedResult}
          setSelectedResult={setSelectedResult}
          resetFilters={resetFilters}
        />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <StudentsTable students={sortedStudents} />
    </div>
  );
}
