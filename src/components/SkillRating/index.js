import { useEffect } from "react";
import gsap from "gsap";
import "./index.css";

const SkillRating = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Calculate the direction of the scroll
      const scrollDirection = window.scrollY > lastScrollY ? "down" : "up";

      // Use GSAP to animate based on the scroll direction
      gsap.to(".rating-skills-timeline-items", {
        y: scrollDirection === "down" ? 0 : 200,
        duration: 2,
        ease: "power1",
        stagger: {
          amount: 3,
        },
      });

      gsap.fromTo(
        ".rating-skills-title",
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      );

      // Update the last scroll position
      lastScrollY = window.scrollY;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
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
};

export default SkillRating;
