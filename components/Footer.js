import Link from "next/link";
import React from "react";
import {
  GrFacebook,
  GrGithub,
  GrGoogle,
  GrInstagram,
  GrLinkedin,
  GrTwitter,
} from "react-icons/gr";

import { TbCopyright } from "react-icons/tb";

const Footer = () => {
  const socialMedia = [
    {
      link: "https://react-icons.github.io/react-icons/search?q=facebook",
      icon: <GrFacebook />,
    },
    {
      link: "https://react-icons.github.io/react-icons/search?q=facebook",
      icon: <GrInstagram />,
    },
    {
      link: "https://react-icons.github.io/react-icons/search?q=facebook",
      icon: <GrGoogle />,
    },
    {
      link: "https://react-icons.github.io/react-icons/search?q=facebook",
      icon: <GrGithub />,
    },
    {
      link: "https://react-icons.github.io/react-icons/search?q=facebook",
      icon: <GrTwitter />,
    },
    {
      link: "https://react-icons.github.io/react-icons/search?q=facebook",
      icon: <GrLinkedin />,
    },
  ];

  return (
    <footer className="bg-dark text-center text-white mt-3">
      {/* Grid container */}
      <div className="container p-4">
        {/* Section: Social media */}
        <section
          className="mb-4 d-flex justify-content-around w-50 mx-auto"
          style={{ maxWidth: "300px" }}
        >
          {socialMedia.map((sm, index) => (
            <Link
              key={index}
              className="btn btn-outline-light btn-floating p-3 rounded border border-2 border-light"
              href={sm.link}
              role="button"
              target="_blank"
            >
              {sm.icon}
            </Link>
          ))}
        </section>
        {/* Section: Social media */}
        {/* Section: Form */}
        <section className="">
          <form action="">
            {/*Grid row*/}
            <div className="row d-flex justify-content-center">
              {/*Grid column*/}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-5 col-12">
                {/* Email input */}
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-auto">
                {/* Submit button */}
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </form>
        </section>
        {/* Section: Form */}
        {/* Section: Text */}
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
        {/* Section: Text */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <TbCopyright /> 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          CodersPoint.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
