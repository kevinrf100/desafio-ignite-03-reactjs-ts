import { NavLink } from "react-router-dom";
import {
  BaseLink,
  Links,
  PostInfoContainer,
  PostInfoItem,
  PostInfosItemsContainer,
  Title,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostInfo() {
  return (
    <PostInfoContainer>
      <Links>
        <NavLink to="/blog">
          <BaseLink>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </BaseLink>
        </NavLink>
        <BaseLink href="https://github.com/kevinrf100">
          Ver no github
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </BaseLink>
      </Links>
      <Title>JavaScript data types and data structures</Title>
      <PostInfosItemsContainer>
        <PostInfoItem>
          <FontAwesomeIcon icon={faGithub} />
          kevinfe
        </PostInfoItem>
        <PostInfoItem>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </PostInfoItem>
        <PostInfoItem>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </PostInfoItem>
      </PostInfosItemsContainer>
    </PostInfoContainer>
  );
}
