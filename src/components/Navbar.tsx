import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [showSidebar, setShowsidebar] = useState(false);
  // const showSidebar = (e) => {
  //   const parent = e.target.parentElement.parentElement.parentElement;
  //   const element = parent.children[1];
  //   // console.log(element);

  //   element.classList.toggle("show-links");
  // };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button
            className="btn nav-btn"
            type="button"
            onClick={() => setShowsidebar(!showSidebar)}
          >
            <FontAwesomeIcon className="fas" icon={faAlignJustify} />
          </button>
        </div>
        <div className={showSidebar ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link">
            home
          </Link>
          <Link to="/about" className="nav-link">
            about
          </Link>
          <Link to="/tags" className="nav-link">
            tags
          </Link>
          <Link to="/recipes" className="nav-link">
            recipes
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
