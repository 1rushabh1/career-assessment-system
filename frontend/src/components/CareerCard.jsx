import FitScoreBar from "./FitScoreBar";

export default function CareerCard({ career }) {
  return (
    <div>
      <h3>{career.careerName}</h3>
      <FitScoreBar score={career.fitScore} />
    </div>
  );
}