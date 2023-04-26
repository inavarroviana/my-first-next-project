import styles from "./ListOfPosts.module.css";
import Link from "next/link";
import LikeButton from "../components/LikeButton";

const fetchPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 10).map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 className={styles.title}>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton />
    </article>
  ));
}

export default ListOfPosts;
