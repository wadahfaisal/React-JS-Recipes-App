import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { NavLinks } from ".";

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
        <NavLinks showSidebar={showSidebar} setShowSidebar={setShowsidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
