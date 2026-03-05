export default function QuestionCard({ question, onSelect }) {
  return (
    <div>
      <h4>{question.text}</h4>
      {question.options.map((opt, i) => (
        <button key={i} onClick={() => onSelect(opt)}>
          {opt.text}
        </button>
      ))}
    </div>
  );
}