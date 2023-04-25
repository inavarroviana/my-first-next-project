import styles from "./Navigation.module.css";
import Link from "next/link";

const links = [
  {
    label: `Home`,
    route: `/`,
  },
  {
    label: `About`,
    route: `/about`,
  },
];

export default function Navigation() {
  return (
    <body>
      <header className={styles.header}>
        <nav>
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </body>
  );
}
