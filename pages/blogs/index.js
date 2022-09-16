import client from "../../utils/apollo-client";
import Link from "next/link";
import React, { useState } from "react";
import BlogList from "../../components/BlogList";
import {
  GET_ALL_BLOGPOSTS,
  GET_ALL_IDs,
  GET_ALL_TOPIC_NAMES,
} from "../../graphql/queries";
import Head from "next/head";
import NFWrapper from "../../components/NFWrapper";

const AllBlogsPage = ({
  blog_posts,
  topics,
  topicName: urlTopic,
  numPosts: numBlogs,
}) => {
  topics = [
    {
      name: "All",
      numBlogs,
    },
    ...topics,
  ];
  // console.log("Topic: ", urlTopic);

  return (
    <NFWrapper>
      <Head>
        <title>CodersPoint | {urlTopic ? urlTopic : "All"} Blogs</title>
      </Head>
      <main className="container my-4">
        <div className="row g-5">
          <div className="col-md-8">
            <BlogList blogPosts={blog_posts} />
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <small className="mb-0">
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </small>
              </div>
              <div className="p-4">
                <h4 className="fst-italic">Recently Added Topics</h4>
                <ol className="list-unstyled mb-0">
                  {topics.map((topic, index) => (
                    <li
                      className={
                        (topic.name === "All" && !urlTopic) ||
                        topic.name === urlTopic
                          ? "active"
                          : ""
                      }
                      key={index}
                    >
                      <Link
                        href={
                          topic.name === "All"
                            ? "/blogs"
                            : `/blogs?topic=${topic.name}`
                        }
                      >
                        <span>{topic.name || "All"}&nbsp;</span>
                      </Link>
                      ({topic.numBlogs})
                    </li>
                  ))}
                </ol>
              </div>
              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </NFWrapper>
  );
};

export default AllBlogsPage;

export async function getServerSideProps(context) {
  const { data } = await client.query({ query: GET_ALL_BLOGPOSTS });
  // console.log(context.query);

  const blogs = [];
  const topicName = context.query.topic;

  data.blogPosts.data.forEach((post) => {
    const relatedTopics = [
      ...post.attributes.topics.data.map((t) => t.attributes.name),
    ];

    if (topicName === undefined || relatedTopics.includes(topicName)) {
      const newPost = {
        id: post.id,
        title: post.attributes.title,
        desc: post.attributes.desc,
        urlSlug: post.attributes.urlSlug,
        topics: relatedTopics,
        author: post.attributes.author.data.attributes.name,
        publishedAt: post.attributes.publishedAt,
      };

      blogs.push(newPost);
    }
  });
  blogs.sort((b1, b2) => b2.id - b1.id);
  // console.log(blogs);

  const { data: topic_data } = await client.query({
    query: GET_ALL_TOPIC_NAMES,
  });

  let topics = topic_data.topics.data
    .map((t) => {
      return {
        name: t.attributes.name,
        numBlogs: t.attributes.blog_posts.data.length,
      };
    })
    .filter((t) => t.numBlogs > 0)
    .sort((t1, t2) => t2.numBlogs - t1.numBlogs);
  // console.log(topics);

  const { data: topic_ids } = await client.query({
    query: GET_ALL_IDs,
  });

  return {
    props: {
      topicName: topicName || "",
      blog_posts: blogs,
      topics,
      numPosts: topic_ids.blogPosts.data.length,
    },
  };
}
