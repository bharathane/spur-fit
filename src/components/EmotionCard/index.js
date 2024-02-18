import { useEffect } from "react";
import gsap from "gsap";
import "./index.css";

const EmotionCard = (props) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Calculate the direction of the scroll
      const scrollDirection = window.scrollY > lastScrollY ? "down" : "up";

      // Use GSAP to animate based on the scroll direction
      gsap.to(".emotion-container", {
        x: scrollDirection === "down" ? 0 : 400,
        duration: 3,
        ease: "power2.out",
      });

      // Update the last scroll position
      lastScrollY = window.scrollY;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { emotionDetails, isHilighted } = props;
  const { title, description, imageUrl, cardColor } = emotionDetails;
  const hilightedEmotionTitle = isHilighted && "hilighted-emotion-title";
  const hilightedEmotionDescription = isHilighted && "hilighted-emotion-title";
  const hilightedEmotioCard = isHilighted && "hilighted-emotion-card";

  return (
    <li
      className={`emotion-container  ${hilightedEmotioCard}`}
      style={{ backgroundColor: cardColor }}
    >
      <img src={imageUrl} className="emotion-image" alt="emotion" />
      <p className={`emotion-title ${hilightedEmotionTitle}`}>{title}</p>
      <p className={`emotion-description ${hilightedEmotionDescription}`}>
        {description}
      </p>
    </li>
  );
};

export default EmotionCard;
