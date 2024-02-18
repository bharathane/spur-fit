import { useEffect } from "react";
import gsap from "gsap";
import "./index.css";

const VacancyItem = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the percentage scrolled
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      // Use GSAP to animate based on the scroll percentage
      gsap.to(".vacancy-item-container", {
        y: scrollPercentage >= 30 ? 0 : 150,
        duration: 2,
        ease: "power2.out",
        yoyo: true,
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { vacancyDetails } = props;
  const { role, type, location, salary } = vacancyDetails;

  return (
    <li className="vacancy-item-container">
      <p className="role-text">{role}</p>
      <ul className="vacancies-details">
        <li className="vacancy-type">{type}</li>
        <li className="vacancy-location">{location}</li>
        <li className="vacancy-salary">&#8364;{salary}</li>
      </ul>
    </li>
  );
};

export default VacancyItem;
