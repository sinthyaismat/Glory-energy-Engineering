// src/About.jsx
import React from "react";
import { FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <h1>About Glory Energy Engineering</h1>
        <p>Reliable • Professional • Compliant Electrical Engineering Services</p>
      </div>

      {/* Main About Box */}
      <div className="about-box">
        <h2>Who We Are</h2>
        <p>
          We are pleased to introduce <strong>Glory Energy Engineering</strong> as a 
          reliable and professional electrical engineering service provider 
          based in Dhaka, Bangladesh. Our team is dedicated to delivering 
          high-quality solutions with a strong focus on safety, efficiency, 
          and client satisfaction.
        </p>
        <p>
          We specialize in complete electrical installation, rectification, 
          and preventive maintenance for factories, commercial buildings, 
          industrial facilities, and residential projects. Our services cover 
          electrical wiring, sub-station panel supply, lightning protection systems, 
          and fire detection & protection solutions.
        </p>
        <p>
          At <strong>Glory Energy Engineering</strong>, we combine advanced technology, 
          certified professionals, and industry best practices to ensure that 
          every project is completed on time and to the highest standards. 
          Our goal is to provide safe, reliable, and cost-effective electrical 
          solutions tailored to your specific needs.
        </p>
        <p>
          Whether it involves designing new electrical systems, upgrading existing infrastructure, 
          or performing comprehensive safety audits, our team is dedicated to delivering 
          excellence, fostering innovation, and building lasting partnerships with every client.
        </p>
      </div>

      {/* Icon Highlights */}
      <div className="about-highlights">
        <div className="highlight-card">
          <FaTools className="highlight-icon" />
          <h3>Industry Experience</h3>
          <p>
            Proven expertise in industrial, commercial, and factory electrical
            projects.
          </p>
        </div>

        <div className="highlight-card">
          <FaShieldAlt className="highlight-icon" />
          <h3>Safety First</h3>
          <p>
            Strong emphasis on electrical safety audits, testing, and preventive
            maintenance.
          </p>
        </div>

        <div className="highlight-card">
          <FaCheckCircle className="highlight-icon" />
          <h3>Regulatory Compliance</h3>
          <p>
            Fully compliant with DIFE requirements, safety codes, and engineering
            standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
