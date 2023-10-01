import { Link } from "react-router-dom";
import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#members" className="logo-btn pri">
        Experiences
      </a>
      <a href="#contact" className="logo-btn sec">
        Get in Touch
      </a>
      <Link to="/chat" className="logo-btn pri">
        Chat with Me
      </Link>
    </div>
  );
}

export default Buttons;
