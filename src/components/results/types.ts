export interface Student {
  id: number;
  nameAr: string;
  nameEn: string;
  subject: string;
  examDate: string;
  examTime: string;
  result: string;
}

export interface PrintResultsProps {
  students: Student[];
}