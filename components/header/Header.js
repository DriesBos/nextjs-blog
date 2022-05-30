import Link from "next/link";
import styles from "./header.module.sass";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <h1>Practical Idealist</h1>
      </div>
      <div>
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
    </div>
  );
}

export default Header;
