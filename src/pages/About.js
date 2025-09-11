import React from "react";
import Footer from "../components/Footer";
import "./About.css"; // optional styling

const About = () => {
  return (
    <div className="about-page">
      {/* Banner */}
      <section className="about-banner">
        <h1>About Axora Solutions</h1>
        <p>Pioneering excellence in business process outsourcing</p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded with the vision of revolutionizing the BPO industry, Axora
          Solutions started as a small team with a big idea: to provide
          businesses with a smarter, more efficient way to manage their
          operations. We believed that by combining cutting-edge technology with
          exceptional human talent, we could offer unparalleled service and
          value.
        </p>
        <p>
          Today, we are a globally recognized BPO provider serving clients
          across various industries. Our journey is a testament to our
          commitment to innovation, quality, and building lasting partnerships
          with our clients.
        </p>
        <div className="about-images">
          <img src="/assets/collab.jpg" alt="Team collaborating" />
          <img src="/assets/goal.jpg" alt="Our mission" />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses to achieve their full potential
          by providing reliable, scalable, and innovative BPO solutions. We aim
          to be a seamless extension of our clients' teams, driving efficiency
          and growth through strategic partnership and operational excellence.
          <br />
          <strong>Time Efficiency –</strong> By outsourcing to Axora, clients
          save valuable time as we manage their non-core operations with
          precision and speed, allowing them to focus on strategic growth.{" "}
          <br /> <strong>Cost Optimization –</strong> Our streamlined processes
          and skilled workforce help reduce overhead expenses, ensuring maximum
          value at a lower operational cost. <br />{" "}
          <strong>24/7 Availability –</strong> With round-the-clock support, we
          ensure uninterrupted service and customer satisfaction, no matter the
          time zone.
        </p>

        <div className="values">
          <div className="value-card">
            <h3>Client-Centric</h3>
            <p>Our clients are our partners. We succeed when they succeed.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We leverage technology and creative thinking to drive efficiency.
            </p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We operate with transparency, honesty, and the highest ethical
              standards.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
