import { useEffect } from "react";
import gsap from "gsap";
import "./index.css";

const VacancyItem = (props) => {
  useEffect(() => {
    gsap.fromTo(
      ".vacancy-item-container",
      {
        y: 10,
      },
      {
        y: 100,
        duration: 2,
        repeat: -1,
        yoyo: true,
      }
    );
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
