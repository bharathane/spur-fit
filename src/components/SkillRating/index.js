import "./index.css";

const SkillRating = () => (
  <div className="rating-skills-container">
    <p className="rating-skills-top-text">
      Let your friends, family and co-workers (anonymously) rate your skills.
    </p>
    <h1 className="rating-skills-title">
      Ever wondered what others think of you?
    </h1>
    <div className="rating-skills-white-card">
      <div className="anonymonos-timeline">
        <div className="rating-skills-timeline-items">
          <div className="rating-time-line-dot"></div>
          <p className="anonymonos-boxes">You</p>
        </div>
        <div className="rating-skills-timeline-items">
          <div className="rating-time-line-dot"></div>
          <p className="anonymonos-boxes">Anonymous 1</p>
        </div>
        <div className="rating-skills-timeline-items">
          <div className="rating-time-line-dot"></div>
          <p className="anonymonos-boxes">Anonymous 2</p>
        </div>
        <div className="rating-skills-timeline-items">
          <div className="rating-time-line-dot"></div>
          <p className="anonymonos-boxes">Anonymous 3</p>
        </div>
      </div>
    </div>
  </div>
);

export default SkillRating;
