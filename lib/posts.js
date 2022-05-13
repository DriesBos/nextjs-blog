import GhostContentAPI from "@tryghost/content-api";
// import {tags, readingTime} from '@tryghost/helpers'

const api = new GhostContentAPI({
  url: "https://practical-idealist.ghost.io",
  key: process.env.DB_KEY,
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

// Filter & Fetch Options
// https://ghost.org/docs/content-api/javascript/
