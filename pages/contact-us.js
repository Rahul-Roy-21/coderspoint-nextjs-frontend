import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NFWrapper from "../components/NFWrapper";
import { useState } from "react";
import { postContactUs } from "../utils/cmsApis";
import { notifyError, notifySuccess } from "../config/toastFunctions";

const ContactUs = () => {
  const [data, setData] = useState({});

  function handleInputs(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log("Input: ", data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(data)) {
      if (value === "") {
        delete data[key];
      }
    }
    console.log("Submitted: ", data);

    let resp = null;
    try {
      resp = await postContactUs(data);
      console.log("Resp: ", resp, !resp);
    } catch (error) {
      console.log(error);
      if ("code" in error) {
        notifyError(error.code);
      } else {
        error.errorList.forEach((msg) => {
          notifyError(msg);
        });
      }
      return;
    }

    if (!resp) {
      notifySuccess("Message Sent Succesfully !!");
      setData({});
    }
  };

  return (
    <NFWrapper>
      <div className="container my-3 px-5 contact-form">
        {/*Section: Contact v.2*/}
        <section className="mb-4">
          {/*Section heading*/}
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us <HiOutlineMail />
          </h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        onChange={handleInputs}
                        value={"name" in data ? data.name : ""}
                      />
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        onChange={handleInputs}
                        value={"email" in data ? data.email : ""}
                      />
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        onChange={handleInputs}
                        value={"subject" in data ? data.subject : ""}
                      />
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        onChange={handleInputs}
                        rows={5}
                        className="form-control md-textarea"
                        defaultValue={""}
                        value={"message" in data ? data.message : ""}
                      />
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button type="submit" className="btn btn-primary">
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <FaMapMarkedAlt />
                  <p>Sector-5, Kolkata, India</p>
                </li>
                <li>
                  <FaPhoneAlt />
                  <p>+ 01 234 567 89</p>
                </li>
                <li>
                  <MdEmail />
                  <p>contact@CodersPoint.com</p>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
        </section>
        {/*Section: Contact v.2*/}
      </div>
    </NFWrapper>
  );
};

export default ContactUs;
