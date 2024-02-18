import VacancyItem from "../VacancyItem";

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

const Vacancies = () => (
  <div className="vacancies-container">
    <h1 className="vacancies-heading">Open vacancies</h1>
    <ul className="all-vacancies">
      {vacanciesList.map((vacancy) => (
        <VacancyItem key={vacancy.id} vacancyDetails={vacancy} />
      ))}
    </ul>
  </div>
);

export default Vacancies;
