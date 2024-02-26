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
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PostData } from "../../../../contexts/PostsContext";
import { dateFormatterFromNow } from "../../../../lib/Utils/formatter";

interface PostInfoProps {
  post: PostData;
  isLoading: boolean;
}

export function PostInfo({ post, isLoading }: PostInfoProps) {
  return (
    <PostInfoContainer>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <Links>
            <NavLink to="/blog">
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
            </NavLink>
            <a href={post.html_url}>
              Ver no github
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </Links>
          <Title>{post.title}</Title>
          <PostInfosItemsContainer>
            <PostInfoItem>
              <FontAwesomeIcon width={18} icon={faGithub} />
              {post.user.login}
            </PostInfoItem>
            <PostInfoItem>
              <FontAwesomeIcon width={18} icon={faCalendarDay} />
              {dateFormatterFromNow(post.created_at)}
            </PostInfoItem>
            <PostInfoItem>
              <FontAwesomeIcon width={18} icon={faComment} />
              {post.comments + " "} comentários
            </PostInfoItem>
          </PostInfosItemsContainer>
        </>
      )}
    </PostInfoContainer>
  );
}
