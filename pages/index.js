import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Practical Idealist</h1>
      <br></br>
      <ul>
        <li>
          <Link href="/posts">Articles</Link>
        </li>
        <li>
          <Link href="/authors">Authors</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
