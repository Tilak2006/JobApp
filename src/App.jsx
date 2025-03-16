import React from "react";
import PixelCard from "./Pixelcard";
import "./App.css"; // Add styling here

const App = () => {
  return (
    <div className="pixel-container">
      <PixelCard pixelText="Java Developer" />
      <PixelCard pixelText="Full Stack Developer" />
      <PixelCard pixelText="Data Scientist" />
    </div>
  );
};

export default App;
