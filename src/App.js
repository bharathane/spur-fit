import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import EqBeatsIq from "./components/EqBeatsIq";
import WorkWithUs from "./components/WorkWithUs";
import MeetTheHead from "./components/MeetTheHead";
import SelfImprovement from "./components/SelfImprovement";
import SkillRating from "./components/SkillRating";
import Vacancies from "./components/Vacancies";
import StartTestSection from "./components/StartTestSection";
import Footer from "./components/Footer";

import "./App.css";

const App = () => (
  <>
    <Header />
    <div className="app-body">
      <HomeBanner />
      <EqBeatsIq />
      <MeetTheHead />
      <SelfImprovement />
      <SkillRating />
      <StartTestSection />
      <WorkWithUs />
      <Vacancies />
      <Footer />
    </div>
  </>
);

export default App;
