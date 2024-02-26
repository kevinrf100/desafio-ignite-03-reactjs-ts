import styled from "styled-components";

export const PostInfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme["base-profile"]};

  padding: 2rem;

  margin-top: -6rem;
`;

export const Links = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    color: ${({ theme }) => theme["blue-500"]};
    border-bottom: 1px solid transparent;

    text-transform: uppercase;

    font-size: 0.75rem;
    font-weight: bold;
  }

  a:hover {
    border-bottom: 1px solid ${({ theme }) => theme["blue-500"]};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme["base-title"]};

  margin-top: 1.25rem;

  font-family: "Nunito";
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 130%;
`;

export const PostInfosItemsContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 2rem;
`;

export const PostInfoItem = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 0.5rem;

  align-items: center;
  text-align: center;

  gap: 0.5rem;

  font-family: "Nunito";
  font-size: 1rem;

  color: ${({ theme }) => theme["base-span"]};
`;
