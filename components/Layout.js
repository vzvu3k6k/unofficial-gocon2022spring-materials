import css from "./Layout.module.css";

export function Layout({ children }) {
  return <div className={css.layout}>{children}</div>;
}
