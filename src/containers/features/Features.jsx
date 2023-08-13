import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    id: 1,
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 2,
    title: "Become the tended active",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 3,
    title: "Message or am nothing",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 4,
    title: "Really boy law county",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it
          Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item) => (
          <Feature title={item.title} text={item.text} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Features;
