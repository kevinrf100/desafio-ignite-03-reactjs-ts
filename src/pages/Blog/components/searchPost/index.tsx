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
  const { posts } = useContext(PostsContext);

  const { register } = useForm<SearchFormInputs>();

  return (
    <SearchPostContainer>
      <SearchPostHeader>
        <Title>Publicações</Title>
        <TotalItems>{posts.length} publicações</TotalItems>
      </SearchPostHeader>
      <input type="text" placeholder="Buscar conteúdo" {...register} />
    </SearchPostContainer>
  );
}
