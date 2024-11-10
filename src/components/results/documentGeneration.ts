import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { Student } from "./types"; 
import { TranslationKey } from "./translation"; 
import cairoFont from "../../font/Cairo-Medium.ttf"

interface GenerateDocumentProps {
  selectedStudents: Student[];
  language: 'en' | 'ar';
  translations: Record<TranslationKey, string>;
}

export const generatePDF = ({ selectedStudents, language, translations: t }: GenerateDocumentProps) => {
  const doc = new jsPDF();
  doc.addFont(cairoFont, "Cairo", "normal");
  doc.setFont("Cairo", "medium");
  doc.setFont("Cairo");
  doc.setFontSize(20);
  doc.text(t.title, 105, 15, { align: "center" });

  (doc as any).autoTable({
    head: [[t.result, t.examTime, t.examDate, t.subject, t.studentName]],
    body: selectedStudents.map((student) => [
      student.result,
      student.examTime,
      student.examDate,
      student.subject,
      language === "en" ? student.nameEn : student.nameAr,
    ]),
    startY: 25,
    styles: { font: "Cairo", halign: "center" },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [224, 224, 224] },
    margin: { top: 25 },
  });

  doc.save("student_results.pdf");
};

export const generateExcel = ({ selectedStudents, language, translations: t }: GenerateDocumentProps) => {
  const ws = XLSX.utils.json_to_sheet(
    selectedStudents.map((student) => ({
      [t.studentName]: language === "en" ? student.nameEn : student.nameAr,
      [t.subject]: student.subject,
      [t.examDate]: student.examDate,
      [t.examTime]: student.examTime,
      [t.result]: student.result,
    }))
  );

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Student Results");
  XLSX.writeFile(wb, "student_results.xlsx");
}
