import {
  SearchPostContainer,
  SearchPostHeader,
  Title,
  TotalItems,
} from "./styles";

export function SearchPost() {
  return (
    <SearchPostContainer>
      <SearchPostHeader>
        <Title>Publicações</Title>
        <TotalItems>6 publicações</TotalItems>
      </SearchPostHeader>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchPostContainer>
  );
}
