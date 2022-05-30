import { useRouter } from "next/router";
import { getSingleAuthor, getAllAuthors } from "../../lib/authors";

export async function getStaticPaths() {
  const authors = await getAllAuthors();
  const paths = authors.map((author) => ({
    params: { name: author.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const author = await getSingleAuthor(context.params.name);

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: { author },
  };
}

function AuthorPage(props) {
  const router = useRouter();
  console.log("ROUTER LOG", router.query);
  const author = props.author;
  console.log("AUTHOR", author);

  return (
    <div>
      <h1>{author.name}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: props.author.bio }} /> */}
    </div>
  );
}

export default AuthorPage;
