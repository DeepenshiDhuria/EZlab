import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <section className="services-section">
      {/* ===== Heading ===== */}
      <div className="services-heading">
        <h1>Our Creative Services</h1>
        <p>Where imagination meets design and storytelling.</p>
      </div>

      {/* ===== Gallery ===== */}
      <div className="services-gallery">
        {/* Service 1 */}
        <div className="service-card">
          <div className="photo-frame">
            <span className="tape tape-top-left"></span>
            <span className="tape tape-top-right"></span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzUPRbxG7fEPQ2nUXx3FSzD8TL4oFsfO5bA&s"
              alt="Video Production"
            />
          </div>
          <p className="caption">🎥 Video Production</p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <div className="photo-frame">
            <span className="tape tape-top-left"></span>
            <span className="tape tape-top-right"></span>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Brand Strategy"
            />
          </div>
          <p className="caption">🌟 Brand Strategy</p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="photo-frame">
            <span className="tape tape-top-left"></span>
            <span className="tape tape-top-right"></span>
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479"
              alt="Creative Direction"
            />
          </div>
          <p className="caption">🎨 Creative Direction</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
