import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.sass";

function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div>
        <Link href="/">Practical Idealist</Link>
      </div>
      <div>
        <ul>
          <li className={router.pathname == "/posts" ? "active" : "nooo"}>
            <Link href="/posts">Essays</Link>
          </li>
          <li className={router.pathname == "/curated" ? "active" : ""}>
            <Link href="/curated">Curated (broken)</Link>
          </li>
          <li className={router.pathname == "/authors" ? "active" : ""}>
            <Link href="/authors">Authors</Link>
          </li>
          <li className={router.pathname == "/tags" ? "active" : ""}>
            <Link href="/tags">Tags</Link>
          </li>
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
