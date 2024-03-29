import { PostData } from "../../contexts/PostsContext";
import { dateFormatterFromNow } from "../../lib/Utils/formatter";
import {
  Description,
  Header,
  PostDateInfo,
  PostItemContainer,
  Title,
} from "./styles";

interface PostItemProps {
  post: PostData;
}

export function PostItem({ post }: PostItemProps) {
  const { title, created_at, body, number } = post;

  const formattedDate = dateFormatterFromNow(created_at);

  return (
    <PostItemContainer to={`/post/${number}`}>
      <Header>
        <Title>{title}</Title>
        <PostDateInfo>{formattedDate}</PostDateInfo>
      </Header>
      <Description>{body}</Description>
    </PostItemContainer>
  );
}
