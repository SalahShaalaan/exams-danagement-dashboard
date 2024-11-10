import PrintResults from "../components/results/PrintResult";
import { STUDENTS_DATA } from "../components/students/data";

const Results: React.FC = () => {
  return (
    <div>
      <PrintResults students={STUDENTS_DATA} />
    </div>
  );
};

export default Results;
