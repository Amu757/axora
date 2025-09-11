import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <img src="/assets/contactban.jpg" alt="Contact Banner" className="banner-img" />
        <div className="banner-text">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Get in touch with Axora Solutions.</p>
        </div>
      </div>

      {/* Logo + Info Section */}
      <div className="contact-content">
        <img src="/logo.png" alt="Axora Logo" className="contact-logo" />
        <div className="contact-info">
          <h2>Axora Solutions Private Limited</h2>
          <p>Your trusted partner for business process outsourcing.</p>
          <p><strong>Email:</strong> md@axorasolutions.com</p>
          <p><strong>Phone:</strong> (+91) 88306-19049</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
