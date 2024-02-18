import ScrollBarItem from "../ScrollBarItem";

import "./index.css";

const workWithUsLeftCardDetails = [
  {
    id: 1,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
  {
    id: 2,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
  {
    id: 3,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
  {
    id: 4,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
];

const WorkWithUs = () => {
  return (
    <div className="work-with-us-con">
      <header className="work-header">
        <h1 className="work-title">Work with us</h1>
        <h3 className="work-with-us-side-title">ahead</h3>
      </header>
      <div className="work-with-us-cards">
        <div className="work-right-cards">
          <div className="about-card">
            <p className="about-product-text">About</p>
            <p className="product-about-description">
              At ahead our goal is to make self improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
          <div className="product-card-container">
            <p className="about-product-text">Product</p>
            <p className="product-about-description">
              At ahead our goal is to make self improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
        </div>
        <ul className="work-with-us-right-card">
          {workWithUsLeftCardDetails.map((leftCardItem) => (
            <ScrollBarItem key={leftCardItem.id} cardDetails={leftCardItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkWithUs;
