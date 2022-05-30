import { useRouter } from "next/router";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export async function getStaticProps(context) {
  const posts = await getAllPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

function AllPostsPage(props) {
  const router = useRouter();
  const posts = props.posts;
  console.log("POSTS", posts);
  console.log("ROUTER LOG", router.query);

  return (
    <div>
      <h1>Articles List</h1>
      <br></br>
      <ul>
        {props.posts.map((post) => (
          <li className="link" key={post.id}>
            <Link
              href={{
                pathname: "/posts/[slug]",
                query: { slug: post.slug },
              }}
            >
              <p>Article: {post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPostsPage;
