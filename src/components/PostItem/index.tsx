import { NavLink } from "react-router-dom";
import { Header, PostItemContainer, Title } from "./styles";

export function PostItem() {
  return (
    <NavLink to="/post/test">
      <PostItemContainer>
        <Header>
          <Title>JavaScript data types and data structures</Title>
          <span>Há 1 dia</span>
        </Header>
        <span>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in{" "}
        </span>
      </PostItemContainer>
    </NavLink>
  );
}
