import React from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      {/* HEADING */}
      <div className="portfolio-heading">
        <h1>About the team</h1>
        <p>Collaborative, supportive, and creative minds.</p>
      </div>

      {/* LEFT SIDE */}
      <div className="left-side">
        {/* Sticky Note */}
        <div className="sticky-note">
          <div className="clip">📎</div>
          <p>
            Some craft films. Some build brands. Some curate art. We bring it all together — 
            a collective of storytellers driven by one belief: every project deserves 
            to be more than just a message; it should become a masterpiece.
          </p>
          <p>
            From first spark to final frame, from raw ideas to timeless visuals — 
            we shape stories that stay with you.
          </p>
        </div>

        {/* India Gate */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDxay88Q96ieB-R8tocW2CpZcrJ0c7QCFuw&s"
          alt="India Gate"
          className="india-gate"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">
       

        <div className="text-content">
          <h2>Take a closer look at the stories V bring to life.</h2>
          <button className="view-btn">View Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
