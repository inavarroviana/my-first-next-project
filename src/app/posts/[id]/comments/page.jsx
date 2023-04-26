import styles from "../../../../../components/ListOfPosts.module.css";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
};

async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul className={styles.comments}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}

export default Comments;
