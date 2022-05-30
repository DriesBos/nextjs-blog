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
      <div className="sectionIntro">
        <div>
          <h1>Original Essays</h1>
        </div>
        <div>
          <p>
            The PRACTICAL IDEALIST is dedicated to supporting and amplifying
            innovation – both technological and intellectual – which, as our
            name declares, combines the practical and the idealistic. We publish
            pieces by a variety of thinkers on a variety topics, freely
            traversing styles and perspectives. No matter the style, discipline,
            or subject matter, we value systems thinking, actionable idealism,
            and beauty—because without beauty, it’s all for nought. We welcome
            submissions from poets and philosophers, artists and activists,
            academics and amateurs alike. Want to contribute something? Click
            here.
          </p>
        </div>
      </div>
      <br></br>
      <ul className="articleList">
        {props.posts.map((post) => (
          <li className="articleList-Item" key={post.id}>
            <div className="articleList-Image">
              <img src={post.feature_image} />
            </div>

            <div className="articleList-Content">
              <Link
                href={{
                  pathname: "/posts/[slug]",
                  query: { slug: post.slug },
                }}
              >
                <div>
                  <p>{post.title}</p>
                </div>
              </Link>
              <div>
                <ul className="authorList">
                  {post.authors.map((author) => (
                    <li key={author.id}>
                      <p>{author.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>{post.excerpt}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPostsPage;
