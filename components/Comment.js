import React from "react";
import { BiCommentDetail } from "react-icons/bi";

function Comment() {
  return (
    <div className="container my-3 px-5 contact-form">
      {/*Section: Contact v.2*/}
      <section className="mb-4">
        {/*Section heading*/}
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Leave a Comment Below <BiCommentDetail />
        </h2>
        <p className="text-center w-responsive mx-auto mb-2">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-9 mb-md-0 mb-5 mx-auto">
            <form id="comment-form" name="comment-form" action="" method="POST">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">Comment*</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows={4}
                      className="form-control md-textarea"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row my-2">
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="email" className="">
                      Email*
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </form>
            <div className="text-center text-md-left">
              <a className="btn btn-success">Submit</a>
            </div>
            <div className="status" />
          </div>
          {/*Grid column*/}
        </div>
      </section>
      {/*Section: Contact v.2*/}
    </div>
  );
}

export default Comment;
