import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaCode, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

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

            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <>
                    <FaUserCircle /> {user.email}
                  </>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" href="/dashboard">
                      My Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        logout();
                        router.push("/login");
                      }}
                    >
                      <a>
                        Logout
                        <IoMdLogOut />
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item mx-2">
                <button
                  class="btn btn-success"
                  onClick={() => {
                    router.push("/login");
                  }}
                  style={{
                    fontSize: "1.1rem",
                    padding: "5px 13px",
                    letterSpacing: "1px",
                  }}
                >
                  Sign-Up
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
