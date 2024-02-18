import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

import "./index.css";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-logo-title-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU"
        alt="website logo"
        className="footer-logo"
      />
      <p className="footer-title">ahead</p>
    </div>
    <div className="email-container">
      <div className="icon-text-container">
        <div className="icon-container">
          <FaLocationDot />
        </div>
        <p className="location-email-text">Augustrase 26, 10117 Berlin</p>
      </div>
      <div className="icon-text-container">
        <div className="icon-container">
          <MdEmail />
        </div>
        <p className="location-email-text">hi@ahead-app.com</p>
      </div>
    </div>
    <img
      src="https://brandeps.com/logo-download/D/Download-on-the-App-Store-logo-vector-01.svg"
      className="app-store-image"
      alt="app store"
    />
    <p className="copy-rights">
      <FaRegCopyright size={10} className="opyrights-icon" />
      2022 Ahead app. All rights reserved.
    </p>
  </footer>
);

export default Footer;
