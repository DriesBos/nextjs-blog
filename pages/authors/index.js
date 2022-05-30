import { useRouter } from "next/router";
import Link from "next/link";
import { getAllAuthors } from "../../lib/authors";

export async function getStaticProps(context) {
  const authors = await getAllAuthors();

  if (!authors) {
    return {
      notFound: true,
    };
  }

  return {
    props: { authors },
  };
}

function AllAuthorsPage(props) {
  const router = useRouter();
  const authors = props.authors;
  console.log("AUTHORS", authors);
  console.log("ROUTER LOG", router.query);

  return (
    <div>
      <Link href={{ pathname: "/" }}>Home</Link>
      <br></br>
      <br></br>
      <h1>Authors List</h1>
      <br></br>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <p>Name: {author.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllAuthorsPage;
