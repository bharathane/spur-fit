import "./index.css";

const selfImprovementsList = [
  {
    id: 1,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    id: 2,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    id: 3,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    id: 4,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
];

const SelfImprovement = () => (
  <div className="self-improvement-container">
    <header className="self-improvement-header">
      <p className="self-improvement-top-title">
        Wrong with self-improvement & how we're fixing it.
      </p>
      <h1 className="self-improvement-title">Self-improvement. Ugh.</h1>
    </header>
    <div className="self-improvement-timeline">
      {selfImprovementsList.map((item) => (
        <div className="timeline-container" key={item.id}>
          <div className="time-line-dot"></div>
          <div className="timeline-details">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SelfImprovement;
