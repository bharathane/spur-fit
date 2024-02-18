import { useEffect } from "react";
import gsap from "gsap";
import "./index.css";

const MeetTheHead = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the percentage scrolled
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      // Use GSAP to animate based on the scroll percentage
      gsap.fromTo(
        ".meet-header",
        {
          x: scrollPercentage >= 10 ? 0 : 20,
          duration: 2,
          ease: "power2.out",
        },
        { x: scrollPercentage >= 30 ? 0 : 200, duration: 1, repeat: false }
      );

      gsap.fromTo(
        ".meet-ahead-content",
        {
          x: scrollPercentage >= 30 ? 0 : 300,
          duration: 2,
        },
        { x: scrollPercentage >= 30 ? 0 : 100, duration: 1, repeat: false }
      );
      gsap.to(".meet-ahead-image", {
        rotate: scrollPercentage >= 60 ? 0 : 360,
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="meet-the-head-con">
      <header className="meet-header">
        <p className="meet-ahead-top-text">Built out of frustation</p>
        <h1 className="meet-ahead-title">Meet the ahead app</h1>
      </header>
      <div className="meet-ahead-body">
        <img
          src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
          className="meet-ahead-image"
          alt="meet ahead"
        />
        <p className="meet-ahead-content">
          A personalized pocket coach that provides bite-sized, science-driven
          tools to boost emotional intelligent.
          <br /> Think of it as a pocket cheerleader towards a better, more
          fulfilling.
        </p>
      </div>
    </div>
  );
};
export default MeetTheHead;
