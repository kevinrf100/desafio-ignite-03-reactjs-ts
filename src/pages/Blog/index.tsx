import { PostList } from "./components/PostList";
import { Profile } from "./components/Profile";
import { SearchPost } from "./components/SearchPost";
import { BlogContainer } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchPost />

      <PostList />
    </BlogContainer>
  );
}
