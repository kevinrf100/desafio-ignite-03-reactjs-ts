import { Header, PostDateInfo, PostItemContainer, Title } from "./styles";

interface PostItemProps {
  title: string;
  description: string;
  createdAt: string;
}

export function PostItem({ title, description, createdAt }: PostItemProps) {
  return (
    <PostItemContainer to="/post/test">
      <Header>
        <Title>{title}</Title>
        <PostDateInfo>{createdAt}</PostDateInfo>
      </Header>
      <span>{description}</span>
    </PostItemContainer>
  );
}
