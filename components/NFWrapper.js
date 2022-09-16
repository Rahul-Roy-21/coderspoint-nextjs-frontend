import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RouteProtection from "./RouteProtection";

const NFWrapper = ({ children }) => {
  return (
    <>
      <RouteProtection>
        <Navbar />
        {children}
        <Footer />
      </RouteProtection>
    </>
  );
};

export default NFWrapper;
