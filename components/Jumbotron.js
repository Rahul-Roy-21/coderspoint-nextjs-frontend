import Link from "next/link";
import React from "react";
import { DiCodeigniter } from "react-icons/di";

const Jumbotron = () => {
  return (
    <div
      className="p-5 mb-4 text-white bg-dark d-flex justify-content-center text-center"
      style={{ fontFamily: "Antic Slab" }}
    >
      <div className="col-md-9 px-0">
        <h1 className="display-3 fst-italic">
          CodersPoint - Coding Solutions &amp; Programming Blogs{" "}
          <DiCodeigniter />
        </h1>
        <p className="lead my-3">
          A Place Where You Find Solutions In Coding And Programming For PHP,
          WordPress, HTML, CSS, JavaScript, Python, C++ and much more. Hire us
          for your software development, mobile app development and web
          development project.
        </p>
        <p className="lead mb-0">
          <Link href="/blogs">
            <a
              className="btn btn-lg btn-outline-light linkBtn"
              href=""
              role="button"
            >
              Start Reading..
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
