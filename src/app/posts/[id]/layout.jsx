import styles from "../../../../components/ListOfPosts.module.css";
import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.commentsLink}>{post.body}</p>
      <div className={styles.marginBottom}>
        <Link href={`posts/${id}/comments`}>See comments</Link>
      </div>
      {children}
    </article>
  );
}

export default Post;
