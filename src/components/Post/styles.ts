import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 26rem;
  max-height: 16.25rem;

  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  padding: 2rem;

  background: ${({ theme }) => theme["base-post"]};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;

  gap: 1rem;

  span {
    color: ${({ theme }) => theme["base-text"]};

    font-size: 0.875rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme["base-title"]};
  font-family: "Nunito";
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme["base-text"]};

  font-family: "Nunito";
  font-size: 1rem;
`;
