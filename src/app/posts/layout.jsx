import styles from "./layout.module.css";
import Counter from "../../../components/Counter";

function PostsLayout({ children }) {
  return (
    <>
      <small>Home &bull; Posts</small>
      <h1 className={`${styles.layout} ${styles.small}`}>
        This is the posts layout
      </h1>
      <Counter />
      {children}
    </>
  );
}

export default PostsLayout;
