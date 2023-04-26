import { Suspense } from "react";
import ListOfPosts from "../../../components/ListOfPosts";

function PostsPage() {
  return (
    <section>
      <Suspense fallback={<p>Loading posts ...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  );
}

export default PostsPage;
