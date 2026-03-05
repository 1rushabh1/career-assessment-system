export default function RoadmapTimeline({ roadmap }) {
  return (
    <div>
      {Object.keys(roadmap).map((year, i) => (
        <div key={i}>
          <h4>{year}</h4>
          <p>{roadmap[year]}</p>
        </div>
      ))}
    </div>
  );
}