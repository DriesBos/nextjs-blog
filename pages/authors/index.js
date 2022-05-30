import { useRouter } from "next/router";
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
      <h1>Authors List</h1>
      <br></br>
      <ul className="authorList">
        {authors.map((author) => (
          <li key={author.id}>
            <p>{author.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllAuthorsPage;
