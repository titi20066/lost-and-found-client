import React from "react";
import "../style/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Lost & Found!</h1>
        <p>Your trusted platform to track, report, and find lost items.</p>
        <div className="home-buttons">
          <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
            About Us
          </button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Contact
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="home-section">
        <h2>About Us</h2>
        <p>
          Lost & Found is a community-driven platform that helps you report and locate lost items.
          We connect people and provide tools to ensure your belongings are returned safely.
        </p>
      </section>

      {/* Features / Latest Updates */}
      <section className="home-section">
        <h2>Features</h2>
        <ul>
          <li>Report lost items quickly</li>
          <li>Search for items in your area</li>
          <li>Receive notifications when items are found</li>
          <li>User-friendly dashboard to manage your reports</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="home-section">
        <h2>Contact Us</h2>
        <p>Email: support@lostfound.com</p>
        <p>Phone: +250 794298539</p>
        <p>Address: Gikondo,Kigali, Rwanda</p>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2025 Lost & Found. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
