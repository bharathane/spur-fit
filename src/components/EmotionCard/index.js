import "./index.css";

const EmotionCard = (props) => {
  const { emotionDetails } = props;
  const { title, description, imageUrl, cardColor } = emotionDetails;

  return (
    <li className="emotion-container" style={{ backgroundColor: cardColor }}>
      <img src={imageUrl} className="emotion-image" alt="emotion" />
      <p className="emotion-title">{title}</p>
      <p className="emotion-description">{description}</p>
    </li>
  );
};

export default EmotionCard;
