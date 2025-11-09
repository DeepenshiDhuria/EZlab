import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      {/* MAIN HEADING */}
      <div className="about-heading">
        <h1>About Us</h1>
      </div>

      {/* INTRO SECTION */}
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          We are a creative collective of storytellers, artists, and visionaries
          who believe in turning every project into a lasting experience. Our
          journey began with a shared passion for visual excellence and
          meaningful narratives that inspire and connect people worldwide.
        </p>
      </div>

      {/* STICKY NOTES SECTION */}
      <div className="sticky-notes-container">
        <div className="sticky">
          <div className="sticky-number">01</div>
          <h3>Creative Minds</h3>
          <p>Innovating ideas and transforming imagination into motion.</p>
        </div>
        <div className="sticky">
          <div className="sticky-number">02</div>
          <h3>Storytellers</h3>
          <p>We shape authentic narratives that touch hearts and move minds.</p>
        </div>
        <div className="sticky">
          <div className="sticky-number">03</div>
          <h3>Vision Builders</h3>
          <p>Crafting brands and stories that stand the test of time.</p>
        </div>
      </div>

      {/* Cursive Ending Section */}
      <div className="signature-section">
        <h2>“Every frame tells a story.”</h2>
      </div>
    </section>
  );
};

export default AboutUs;
