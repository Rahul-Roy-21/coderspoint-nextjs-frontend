import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light m-1">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <FaCode /> CodersPoint
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link" href="/contact-us">
                Contact-Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
