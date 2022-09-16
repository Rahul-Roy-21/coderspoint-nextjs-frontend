import client from "../../utils/apollo-client";
import React from "react";
import { GET_ALL_SLUGS, GET_BLOGPOST_BY_SLUG } from "../../graphql/queries";

import Image from "next/image";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Comment from "../../components/Comment";
import NFWrapper from "../../components/NFWrapper";

const BlogPost = ({ blog }) => {
  return (
    <NFWrapper>
      <Head>
        <title>CodersPoint | {blog.title}</title>
      </Head>
      <main className="container m-4 blogSection">
        <h1 className="text-center">{blog.title}</h1>
        <hr />
        <section style={{ maxWidth: "800px" }} className="mx-auto my-3">
          <Image
            priority
            src={`http://localhost:1337${blog.image.url}`}
            className="card-img-top"
            layout="responsive"
            height="60"
            width={(blog.image.width * 60) / blog.image.height}
          />
        </section>
        {/*<div>
         <img src={`http://localhost:1337/uploads/${post.heroImgUrl}`} /> 
      </div>*/}

        {/* <MDXRemote {...blog.content} /> */}
        <div
          dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
          className="mx-3 mx-md-5"
        ></div>
      </main>
      <hr className="mb-5" />
      <div className="p-1 mx-auto">
        <Comment />
      </div>
    </NFWrapper>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.blogPosts.data.map((post) => {
    return { params: { slug: post.attributes.urlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_BLOGPOST_BY_SLUG,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.blogPosts.data[0].attributes;
  // console.log(attrs);
  // const html = await serialize(attrs.content);
  const mdata = matter(attrs.content);
  // console.log(mdata.content);

  return {
    props: {
      blog: {
        title: attrs.title,
        urlSlug: attrs.urlSlug,
        content: mdata.content,
        image: {
          url: attrs.heroImg.data.attributes.url,
          width: attrs.heroImg.data.attributes.width,
          height: attrs.heroImg.data.attributes.height,
        },

        topics: [...attrs.topics.data.map((t) => t.attributes.name)],
        author: attrs.author.data.attributes.name,
      },
    },
  };
}
