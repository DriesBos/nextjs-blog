import GhostContentAPI from "@tryghost/content-api";
// import {tags, readingTime} from '@tryghost/helpers'

const api = new GhostContentAPI({
  url: "https://practical-idealist.ghost.io",
  key: process.env.DB_KEY,
  version: "v3",
});

export async function getAllTags() {
  return await api.tags
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

// export async function getSingleTag(tagSlug) {
//   return await api.tags
//     .read({
//       slug: tagSlug,
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
