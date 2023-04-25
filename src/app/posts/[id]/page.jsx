function Post({ params }) {
  const { id } = params;
  return <h2>This is the post {id}</h2>;
}

export default Post;
