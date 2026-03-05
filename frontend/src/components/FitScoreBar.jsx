export default function FitScoreBar({ score }) {
  return (
    <div style={{ border: "1px solid black", width: "200px" }}>
      <div style={{ width: `${score}%`, background: "green", color: "white" }}>
        {score}%
      </div>
    </div>
  );
}