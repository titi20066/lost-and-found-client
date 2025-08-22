import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Lost & Found</h1>
      <p>Report items you’ve lost or found.</p>
      <Link to="/dashboard">
        <button>See All Items</button>
      </Link>
    </div>
  );
}

export default LandingPage;
