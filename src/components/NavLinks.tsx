import { Link } from "react-router-dom";
import links from "../utils/navbarLinks";
import { NavLinksProps as Props } from "../types/porpsTypes";

const NavLinks = ({ showSidebar, setShowSidebar }: Props) => {
  return (
    <div className={showSidebar ? "nav-links show-links" : "nav-links"}>
      {links.map((link) => {
        const { id, text, target } = link;

        if (text === "contact") {
          return (
            <div className="nav-link contact-link">
              <Link
                to={target}
                className="btn"
                onClick={() => setShowSidebar(false)}
              >
                {text}
              </Link>
            </div>
          );
        }
        return (
          <Link
            key={id}
            to={target}
            className="nav-link"
            onClick={() => setShowSidebar(false)}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
