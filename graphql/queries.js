import { gql } from "@apollo/client";

export const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

export const GET_ALL_IDs = gql`
  query {
    blogPosts {
      data {
        id
      }
    }
  }
`;

export const GET_ALL_BLOGPOSTS = gql`
  query {
    blogPosts {
      data {
        id
        attributes {
          title
          desc
          publishedAt
          urlSlug
          topics {
            data {
              attributes {
                name
              }
            }
          }
          author {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_TOPICS = gql`
  query {
    topics {
      data {
        id
        attributes {
          name
          blog_posts {
            data {
              attributes {
                title
                author {
                  data {
                    id
                  }
                }
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_TOPIC_NAMES = gql`
  query {
    topics {
      data {
        attributes {
          name
          blog_posts {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const GET_BLOGPOST_BY_SLUG = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        id
        attributes {
          title
          urlSlug
          content
          heroImg {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          topics {
            data {
              attributes {
                name
              }
            }
          }
          author {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
