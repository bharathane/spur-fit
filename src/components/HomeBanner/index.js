import { useEffect } from "react";
import gsap from "gsap";
import "./index.css";

const HomeBanner = () => {
  useEffect(() => {
    gsap.to(".home-image", {
      rotate: 360,
      duration: 1,
    });
    gsap.set(".home-content-container", {
      opacity: 0,
    });
    gsap.to(".home-content-container", {
      x: 100,
      duration: 1.21,
      opacity: 1,
    });
  }, []);
  return (
    <div className="home-banner">
      <div className="home-content-container">
        <p className="ahead-para">Ahead app</p>
        <h1 className="home-heading">
          Master your life by mastering your emotions
        </h1>
        <div className="app-ranting-con">
          <img
            src="https://brandeps.com/logo-download/D/Download-on-the-App-Store-logo-vector-01.svg"
            className="app-store-image"
            alt="app store"
          />
          <div className="rating-container">
            <img
              src="https://t3.ftcdn.net/jpg/06/04/56/52/360_F_604565205_NMEgtTykGn8oEcqS0nHzVwDvvgWQbkhI.jpg"
              className="five-star-image"
              alt="five star"
            />
            <p className="rating-text">100+ AppStore reviews</p>
          </div>
        </div>
      </div>
      <img
        src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
        className="home-image"
        alt="home"
      />
    </div>
  );
};
export default HomeBanner;
