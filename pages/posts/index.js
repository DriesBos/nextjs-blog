import { useRouter } from "next/router";
import Link from "next/link";
import { getPosts } from "../../lib/posts";

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

function PostsPage(props) {
  const router = useRouter();
  const posts = props.posts;
  console.log("POSTS", posts);
  console.log("ROUTER LOG", router.query);

  return (
    <div>
      <Link href={{ pathname: "/" }}>Home</Link>
      <br></br>
      <br></br>
      <h1>Articles List</h1>
      <br></br>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link
              href={{
                pathname: "/posts/[slug]",
                query: { slug: post.slug },
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
