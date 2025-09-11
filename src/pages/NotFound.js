import React from "react";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <a href="/" style={{ color: "#007bff" }}>Go back Home</a>
    </div>
  );
}

export default NotFound;
