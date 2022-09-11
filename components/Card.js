import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBook } from "react-icons/bi";
import { MdOutlinePerson } from "react-icons/md";

const Card = ({ topic }) => {
  return (
    <div className="card">
      {/* <img
        src={`http://localhost:1337${topic.imageUrl}`}
        className="card-img-top"
        alt="py"
      /> */}
      <div>
        <Image
          src={`http://localhost:1337${topic.imageUrl}`}
          className="card-img-top"
          layout="responsive"
          height="60"
          width="100"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title py-1 mb-2 fw-bold">{topic.name}</h5>
        <div className="d-flex justify-content-around col-8">
          <div>
            <BiBook />
            {topic.numBlogs} Posts
          </div>
          <div>
            <MdOutlinePerson />
            {topic.numAuthors} Authors
          </div>
        </div>
        <div className="d-grid gap-2 mx-auto my-2">
          <Link href={`/blogs?topic=${topic.name}`}>
            <button className="btn btn-outline-success linkBtn" type="button">
              Browse Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
