import Link from "next/link";
import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BlogCard = (props) => {
  let pubDate = new Date(props.publishedAt);
  pubDate = `${months[pubDate.getMonth()]} ${new String(
    pubDate.getDay()
  ).padStart(2, "0")} ${pubDate.getFullYear()}`;

  return (
    <div className="col-12 blogCard my-2">
      <div className="row g-0 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mt-1 text-primary">
            {props.topics.join(", ")}
          </strong>
          <h3 className="text-capitalize">{props.title}</h3>
          <div className=" mt-0 mb-2 d-flex justify-content-between w-75">
            <span>
              <MdOutlinePerson />
              {props.author}
            </span>
            <span>
              <HiPencilAlt />
              {pubDate}
            </span>
          </div>
          <small className="card-text mb-auto">{props.desc}</small>
          <Link href={`blogs/${props.urlSlug}`}>
            <button className="btn btn-outline-primary my-2 w-50 me-auto linkBtn">
              Go to Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
