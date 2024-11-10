import { useMemo, useState } from 'react';
import { Student } from '../types'; 

export const useStudentFilters = (students: Student[]) => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedResult, setSelectedResult] = useState<string>("");

  const uniqueSubjects = useMemo(
    () => [...new Set(students.map((student) => student.subject))],
    [students]
  );

  const uniqueDates = useMemo(
    () => [...new Set(students.map((student) => student.examDate))],
    [students]
  );

  const uniqueResults = useMemo(
    () => [...new Set(students.map((student) => student.result))],
    [students]
  );

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchSubject = selectedSubject
        ? student.subject === selectedSubject
        : true;
      const matchDate = selectedDate ? student.examDate === selectedDate : true;
      const matchResult = selectedResult
        ? student.result === selectedResult
        : true;
      return matchSubject && matchDate && matchResult;
    });
  }, [students, selectedSubject, selectedDate, selectedResult]);

  const clearFilters = () => {
    setSelectedSubject("");
    setSelectedDate("");
    setSelectedResult("");
  };

  return {
    selectedSubject,
    setSelectedSubject,
    selectedDate,
    setSelectedDate,
    selectedResult,
    setSelectedResult,
    uniqueSubjects,
    uniqueDates,
    uniqueResults,
    filteredStudents,
    clearFilters,
  };
};