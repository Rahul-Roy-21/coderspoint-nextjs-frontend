import React from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogList = ({ blogPosts }) => {
  return (
    <div className="row mb-2">
      {blogPosts.map((blogItem) => {
        return <BlogCard {...blogItem} key={blogItem.id} />;
      })}
    </div>
  );
};

export default BlogList;
