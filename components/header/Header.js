import Link from "next/link";
import styles from "./header.module.sass";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">Practical Idealist</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/posts">Essays</Link>
          </li>
          <li>
            <Link href="/curated">Curated (broken)</Link>
          </li>
          <li>
            <Link href="/authors">Authors</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
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
