import { useContext } from "react";
import { PostsContext } from "../../../../contexts/PostsContext";
import { PostsContainer } from "./styles";
import { PostItem } from "../../../../components/PostItem";

export function PostsList() {
  const { posts } = useContext(PostsContext);

  return (
    <PostsContainer>
      {posts.map((post, index) => {
        return <PostItem key={index} post={post} />;
      })}
    </PostsContainer>
  );
}
