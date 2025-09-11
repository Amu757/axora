import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Footer from "../components/Footer";

function Home() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const servicesImages = [
    { src: "/assets/service1.png", alt: "Service 1" },
    { src: "/assets/service2.png", alt: "Service 2" },
    { src: "/assets/service3.png", alt: "Service 3" },
    { src: "/assets/service4.png", alt: "Service 4" },
  ];

  const expertise = [
    {
      img: "/assets/expert9.jpg",
      title: "General Back Office Support",
      info: "Streamlined admin tasks for smooth operations.",
    },
    {
      img: "/assets/expert3.jpg",
      title: "Work Order Processing, Audits",
      info: "Order Creation & Tracking, Quality Audits, Performance Reviews",
    },
    {
      img: "/assets/expert1.jpg",
      title: "Utility Management",
      info: "Billing & Payment Support, Service Requests, Outage Communication",
    },
  ];

  const reviews = [
    {
      img: "/assets/client2.jpg",
      name: "Jane Smith",
      company: "Designify",
      text: "Professional and creative team.",
      stars: 4,
    },
    {
      img: "/assets/client3.jpg",
      name: "Mike Johnson",
      company: "BuildPro",
      text: "Great quality and timely delivery.",
      stars: 5,
    },
    {
      img: "/assets/client1.jpg",
      name: "John Doe",
      company: "TechCorp",
      text: "Amazing service, highly recommend!",
      stars: 5,
    },
  ];

  return (
    <div className="home-container">
      {/* Banner Slider */}
      <Slider {...sliderSettings} className="banner-slider">
        {servicesImages.map((item, idx) => (
          <div key={idx}>
            <img src={item.src} alt={item.alt} className="banner-img" />
          </div>
        ))}
      </Slider>

      {/* Our Expertise */}
      <section className="expertise-section">
        <h2>Our Expertise</h2>
        <div className="expertise-cards">
          {expertise.map((exp, idx) => (
            <motion.div
              key={idx}
              className="expert-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img src={exp.img} alt={exp.title} />
              <h3>{exp.title}</h3>
              <p>{exp.info}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Why Choose Us Sections === */}
      <div className="why-choose">
        <div className="why-item">
          <img
            src="/assets/timesave.jpg"
            alt="Time Saving"
            className="why-img"
          />
          <div className="why-text">
            <h2>Save Valuable Time</h2>
            <p>
              Focus on your core business while Axora handles back-office
              operations with speed, accuracy, and efficiency.
            </p>
          </div>
        </div>

        <div className="why-item reverse">
          <img
            src="/assets/costcut.jpg"
            alt="Cost Cutting"
            className="why-img"
          />
          <div className="why-text">
            <h2>Cut Operational Costs</h2>
            <p>
              Our optimized processes and skilled workforce help reduce overhead
              expenses, ensuring maximum value with minimum investment.
            </p>
          </div>
        </div>

        <div className="why-item">
          <img
            src="/assets/supporting.jpg"
            alt="24/7 Support"
            className="why-img"
          />
          <div className="why-text">
            <h2>24/7 Global Support</h2>
            <p>
              With round-the-clock support, our team ensures uninterrupted
              service, customer satisfaction, and smooth operations across all
              time zones.
            </p>
          </div>
        </div>

        <div className="why-item reverse">
          <img src="/assets/growth.jpg" alt="Scalability" className="why-img" />
          <div className="why-text">
            <h2>Scalable Solutions</h2>
            <p>
              At Axora Solutions, we understand that every business evolves with
              time. Whether you’re a growing startup or a large enterprise, our
              BPO services are designed to scale seamlessly with your needs. We
              offer the flexibility to expand or streamline operations without
              compromising efficiency, ensuring you’re always future-ready. Our
              solutions adapt to market demands, helping your business stay
              agile, competitive, and cost-effective.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <section className="cta-section">
        <h2>Ready to Elevate Your Business?</h2>
        <p>
          Let's discuss how Axora Solutions can tailor a BPO strategy for your
          success.
        </p>
        <a href="/contact" className="cta-btn">
          Get in Touch
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
