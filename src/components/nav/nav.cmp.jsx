import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = ({ toggle, nav }) => {
  let style;
  if (nav) {
    style = {
      transform: `translate(0)`,
      opacity: 1,
    };
  }

  return (
    <nav className="nav-slide" style={style}>
      <div className="page-links">
        <Link
          onClick={toggle}
          className={`link-page ${nav ? "link-page-open" : ""}`}
          to="/"
        >
          ACCUEIL
        </Link>
        <Link
          onClick={toggle}
          className={`link-page ${nav ? "link-page-open" : ""}`}
          to="/about"
        >
          A PROPOS
        </Link>
        <Link
          onClick={toggle}
          className={`link-page ${nav ? "link-page-open" : ""}`}
          to="/contact"
        >
          CONTACT
        </Link>

        <div className="social-icons"></div>
      </div>
    </nav>
  );
};

export default Nav;
