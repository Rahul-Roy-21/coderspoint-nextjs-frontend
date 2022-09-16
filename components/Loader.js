import React from "react";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-75">
      <strong>Loading...</strong>
      <div
        className="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loader;
