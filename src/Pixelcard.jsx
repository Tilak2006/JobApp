import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pixelcard.css";

const PixelCard = ({ pixelText }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/posts");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div
      className={`pixel-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="pixel-text">{pixelText}</p>
    </div>
  );
};

export default PixelCard;
