import GhostContentAPI from "@tryghost/content-api";
// import {tags, readingTime} from '@tryghost/helpers'

const api = new GhostContentAPI({
  url: "https://practical-idealist.ghost.io",
  key: process.env.DB_KEY,
  version: "v3",
});

export async function getAllPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

// Filter & Fetch Options
// https://ghost.org/docs/content-api/javascript/
