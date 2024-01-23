import { Profile } from "./components/Profile";
import { SearchPost } from "./components/SearchPost";
import { PostsProvider } from "../../contexts/PostsContext";
import { PostsList } from "./components/PostsList";

export function Blog() {
  return (
    <PostsProvider>
      <Profile />
      <SearchPost />
      <PostsList />
    </PostsProvider>
  );
}
