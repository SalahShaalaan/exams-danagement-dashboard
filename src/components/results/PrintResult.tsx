import { FaFilePdf, FaFileExcel } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "./translation";
import { PrintResultsProps } from "./types";
import { useStudentFilters } from "./hooks/useStudentFilters";
import { useStudentSelection } from "./hooks/useStudentSelection";
import { generateExcel, generatePDF } from "./documentGeneration";
import FilterSection from "./FilterSection";
import ResultsTable from "./ResultsTable";
import NoResults from "./NoResults";

const PrintResults: React.FC<PrintResultsProps> = ({ students }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const {
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
  } = useStudentFilters(students);

  const {
    selectedStudents,
    areAllFilteredSelected,
    handleSelectAll,
    toggleStudentSelection,
  } = useStudentSelection(filteredStudents);

  const handleGeneratePDF = () => {
    const selectedStudentsData = filteredStudents.filter((student) =>
      selectedStudents.includes(student.id)
    );
    generatePDF({
      selectedStudents: selectedStudentsData,
      language,
      translations: t,
    });
  };

  const handleGenerateExcel = () => {
    const selectedStudentsData = filteredStudents.filter((student) =>
      selectedStudents.includes(student.id)
    );
    generateExcel({
      selectedStudents: selectedStudentsData,
      language,
      translations: t,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-full sm:max-w-7xl">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-slate-800 dark:text-slate-200">
        {t.title}
      </h1>

      <FilterSection
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedResult={selectedResult}
        setSelectedResult={setSelectedResult}
        uniqueSubjects={uniqueSubjects}
        uniqueDates={uniqueDates}
        uniqueResults={uniqueResults}
        clearFilters={clearFilters}
        translations={t}
      />

      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={areAllFilteredSelected}
            onChange={handleSelectAll}
            className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 border-slate-300 dark:border-slate-600 rounded"
          />
          <span className="text-slate-700 dark:text-slate-200">
            {t.selectAll}
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleGeneratePDF}
            disabled={selectedStudents.length === 0}
            className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 transition-colors shadow-sm"
          >
            <FaFilePdf className="hidden sm:inline" />
            {t.createPDF}
          </button>
          <button
            onClick={handleGenerateExcel}
            disabled={selectedStudents.length === 0}
            className="bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 transition-colors shadow-sm"
          >
            <FaFileExcel className="hidden sm:inline" />
            {t.createExcel}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-xl">
        {filteredStudents.length > 0 ? (
          <ResultsTable
            filteredStudents={filteredStudents}
            selectedStudents={selectedStudents}
            toggleStudentSelection={toggleStudentSelection}
            language={language}
            translations={t}
          />
        ) : (
          <NoResults translations={t} />
        )}
      </div>
    </div>
  );
};

export default PrintResults;
