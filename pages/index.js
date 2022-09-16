import client from "../utils/apollo-client";
import Head from "next/head";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import { GET_ALL_TOPICS } from "../graphql/queries";
import NFWrapper from "../components/NFWrapper";

export default function Home(props) {
  return (
    <NFWrapper>
      <Head>
        <title>CodersPoint-Blog</title>
      </Head>

      <Jumbotron />
      <main className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {props.topics.map((topic) => {
            return (
              <div className="col" key={topic.id}>
                <Card topic={topic} />
              </div>
            );
          })}
        </div>
      </main>
    </NFWrapper>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_TOPICS });

  let topics = data.topics.data.map((t) => {
    const authorIds = new Set();

    t.attributes.blog_posts.data.forEach((post) => {
      authorIds.add(post.attributes.author.data.id);
    });

    return {
      id: t.id,
      name: t.attributes.name,
      imageUrl: t.attributes.image.data.attributes.url,
      numBlogs: t.attributes.blog_posts.data.length,
      numAuthors: authorIds.size,
    };
  });

  topics.sort((t1, t2) => t2.numBlogs - t1.numBlogs);
  topics = topics.filter((t) => t.numBlogs > 0);

  // console.log(topics);
  return {
    props: {
      topics: topics,
    },
    revalidate: 10,
  };
}
