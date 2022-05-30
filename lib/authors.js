import GhostContentAPI from "@tryghost/content-api";
// import {tags, readingTime} from '@tryghost/helpers'

const api = new GhostContentAPI({
  url: "https://practical-idealist.ghost.io",
  key: process.env.DB_KEY,
  version: "v3",
});

export async function getAllAuthors() {
  return await api.authors
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSingleAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
