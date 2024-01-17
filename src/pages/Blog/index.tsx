import { Profile } from "./components/profile";
import { SearchPost } from "./components/searchPost";
import { BlogContainer } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchPost />
    </BlogContainer>
  );
}
