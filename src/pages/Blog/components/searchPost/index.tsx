import { useForm } from "react-hook-form";
import {
  SearchPostContainer,
  SearchPostHeader,
  Title,
  TotalItems,
} from "./styles";
import * as z from "zod";
import { useContext } from "react";
import { PostsContext } from "../../../../contexts/PostsContext";

const searchFormScheme = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormScheme>;

export function SearchPost() {
  const { posts, fetchPosts } = useContext(PostsContext);

  const { register, handleSubmit } = useForm<SearchFormInputs>();

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query);
  }

  return (
    <SearchPostContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchPostHeader>
        <Title>Publicações</Title>
        <TotalItems>{posts.length} publicações</TotalItems>
      </SearchPostHeader>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchPostContainer>
  );
}
