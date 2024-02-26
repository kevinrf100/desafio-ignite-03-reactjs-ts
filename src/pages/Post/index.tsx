import { useCallback, useEffect, useState } from "react";
import { PostContent } from "./components/PostDetails";
import { PostInfo } from "./components/PostInfo";
import { PostContainer } from "./styles";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PostData } from "../../contexts/PostsContext";

export function Post() {
  const { id } = useParams();

  const [postData, setPostData] = useState({} as PostData);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get(
      `/repos/kevinrf100/desafio-ignite-03-reactjs-ts/issues/${id}`,
    );

    setIsLoading(false);
    setPostData(response.data);
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <PostContainer>
      <PostInfo isLoading={isLoading} post={postData} />
      <PostContent content={postData.body} />
    </PostContainer>
  );
}
