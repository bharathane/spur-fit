import "./index.css";

const Header = () => (
  <nav>
    <div className="nav-header-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-item">
        <li className="nav-list-item">
          <a href="#" className="nav-item">
            Emotions
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-item">
            Manifesto
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-item">
            Self-awareness test
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-item">
            Work With Us
          </a>
        </li>
      </ul>
      <button className="download-button">Download App</button>
    </div>
  </nav>
);

export default Header;
