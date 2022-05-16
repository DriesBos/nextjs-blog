import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { getSinglePost, getPosts } from "../../lib/posts";

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

function PostPage(props) {
  const router = useRouter();
  console.log("ROUTER LOG", router.query);
  const post = props.post;
  console.log("POST", post);

  return (
    <div>
      <Link href={{ pathname: "/" }}>Home</Link>
      <br></br>
      <br></br>
      <Link href={{ pathname: "/posts/" }}>Articles</Link>
      <br></br>
      <br></br>
      <h1>Article Single</h1>
      <br></br>
      <h1>{post.title}</h1>
      <br></br>
      <div>{post.html}</div>
      <br></br>
      <img src={post.feature_image} />
      {/* <Image
        src={`${post.feature_image}`}
        alt="Picture of the author"
        width={500}
        height={500}
        // blurDataURL="data:..."
        // placeholder="blur" // Optional blur-up while loading
      /> */}
    </div>
  );
}

export default PostPage;
