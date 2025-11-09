import React from "react";
import "./Highlights.css";

const Highlights = () => {
  return (
    <section className="highlight-section">
      {/* ===== Heading ===== */}
      <div className="highlight-heading">
        <h1>The Highlight Reel</h1>
        <p>Watch the magic we’ve captured</p>
      </div>

      {/* ===== Video Frame ===== */}
      <div className="highlight-container">
        <div className="film-frame">
          <div className="film-side left">
            <button className="nav-arrow">❮</button>
          </div>

          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Highlight Video"
              allowFullScreen
            ></iframe>
          </div>

          <div className="film-side right">
            <button className="nav-arrow">❯</button>
          </div>
        </div>
      </div>

      {/* ===== Decorative Sides ===== */}
     
    </section>
  );
};

export default Highlights;
