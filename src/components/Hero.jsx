import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Bubble animation */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        ></div>
      ))}

      {/* Left Section */}
      <div className="hero-left">
        
        <h1 className="hero-name">
          <span className="v-letter">V</span>Films
        </h1>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <h2 className="hero-title">
          Varnan is where stories find their voice and form.
        </h2>

        <p className="hero-subtitle">Films . Brands . Art</p>
        <br />
        <p className="hero-desc">
          Since 2009, we’ve been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. We believe it takes trust,
          patience, and an eye for the unseen to capture what truly matters.
        </p>
      </div>
    </section>
  );
}
