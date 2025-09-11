import React from "react";
import "./Services.css";
import Footer from "../components/Footer";

function Services({ services }) {
  return (
    <>
      <section className="services-section">
        <h1 className="services-title">Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.title} className="service-img" />
              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;
