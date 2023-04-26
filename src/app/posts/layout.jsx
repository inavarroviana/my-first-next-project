import styles from "./layout.module.css";
import Counter from "../../../components/Counter";
import AboutLayout from "../about/layout";

function PostsLayout({ children }) {
  return (
    <>
      <AboutLayout>
        <small>Home &bull; Posts</small>
        <h1 className={`${styles.layout} ${styles.small}`}>
          This is the posts layout
        </h1>
        <Counter />
        {children}
      </AboutLayout>
    </>
  );
}

export default PostsLayout;
