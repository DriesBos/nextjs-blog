import { useRouter } from "next/router";
import { getAllTags } from "../../lib/tags";

export async function getStaticProps(context) {
  const tags = await getAllTags();

  if (!tags) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tags },
  };
}

function AllTagsPage(props) {
  const router = useRouter();
  const tags = props.tags;
  console.log("TAGS", tags);
  console.log("ROUTER LOG", router.query);

  return (
    <div>
      <h1>Tags List</h1>
      <br></br>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id} style={{ background: tag.accent_color }}>
            <p>Tag Name + custom color: {tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTagsPage;
