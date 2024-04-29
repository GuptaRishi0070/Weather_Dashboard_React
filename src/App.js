import React from "react";
import CurrentLocation from "./components/currentLocation";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="logo" style={{ marginTop: "-10px" }}>
        <h1>Welcome To Your Real-Time Weather Dashboard</h1>
      </div>

      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/GuptaRishi0070"
        >
          Rishi Gupta
        </a>{" "}
        | Followed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rishi-gupta-54a3b4255/"
        >
          LINKEDIN
        </a>
      </div>
    </>
  );
};

export default App;
