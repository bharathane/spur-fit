import { useEffect } from "react";
import VacancyItem from "../VacancyItem";
import gsap from "gsap";

import "./index.css";

const vacanciesList = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
  {
    id: 2,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
  {
    id: 3,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
];

const Vacancies = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the percentage scrolled
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      // Use GSAP to animate based on the scroll percentage
      gsap.to(".vacancies-heading", {
        x: scrollPercentage >= 30 ? 0 : 500,
        duration: 2,
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="vacancies-container">
      <h1 className="vacancies-heading">Open vacancies</h1>
      <ul className="all-vacancies">
        {vacanciesList.map((vacancy) => (
          <VacancyItem key={vacancy.id} vacancyDetails={vacancy} />
        ))}
      </ul>
    </div>
  );
};

export default Vacancies;
