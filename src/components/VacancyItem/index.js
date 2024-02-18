import "./index.css";

const VacancyItem = (props) => {
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
