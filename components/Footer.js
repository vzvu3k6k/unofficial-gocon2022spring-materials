import Link from "next/link";

import css from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <nav>
        <ul className={css.list}>
          <li className={css.listItem}>
            <Link href="/">Top</Link>
          </li>
          <li className={css.listItem}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
