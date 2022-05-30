import Link from "next/link";

function FilteredPostsPage() {
  return (
    <div>
      <Link href={{ pathname: "/" }}>Home</Link>
      <br></br>
      <br></br>
      <Link href={{ pathname: "/posts/" }}>Articles</Link>
      <br></br>
      <br></br>
      <h1>Filtered Articles</h1>
    </div>
  );
}

export default FilteredPostsPage;
