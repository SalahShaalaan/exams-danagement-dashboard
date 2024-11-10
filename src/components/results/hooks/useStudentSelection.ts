import { useState, useMemo } from 'react';
import { Student } from '../types'; 

export const useStudentSelection = (filteredStudents: Student[]) => {
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

  const areAllFilteredSelected = useMemo(() => {
    return (
      filteredStudents.length > 0 &&
      filteredStudents.every((student) => selectedStudents.includes(student.id))
    );
  }, [filteredStudents, selectedStudents]);

  const handleSelectAll = () => {
    if (areAllFilteredSelected) {
      setSelectedStudents((prev) =>
        prev.filter(
          (id) => !filteredStudents.some((student) => student.id === id)
        )
      );
    } else {
      const filteredIds = filteredStudents.map((student) => student.id);
      setSelectedStudents((prev) => {
        const existing = prev.filter(
          (id) => !filteredStudents.some((student) => student.id === id)
        );
        return [...existing, ...filteredIds];
      });
    }
  };

  const toggleStudentSelection = (id: number) => {
    setSelectedStudents((prev) =>
      prev.includes(id)
        ? prev.filter((studentId) => studentId !== id)
        : [...prev, id]
    );
  };

  return {
    selectedStudents,
    areAllFilteredSelected,
    handleSelectAll,
    toggleStudentSelection,
  };
}
