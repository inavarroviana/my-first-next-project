import styles from "./layout.module.css";

function PostsLayout({ children }) {
  return (
    <>
      <h1 className={styles.layout}>This is the posts layout</h1>
      {children}
    </>
  );
}

export default PostsLayout;
