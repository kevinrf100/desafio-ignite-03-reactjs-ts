import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;

  border-radius: 10px;

  margin-top: -6em;

  background: ${({ theme }) => theme["base-profile"]};

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme["base-title"]};
`;

export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
    line-height: 130%;
    font-size: 1.5rem;

    color: ${({ theme }) => theme["base-title"]};
  }

  a {
    display: flex;
    text-align: top;
    justify-content: center;

    color: ${({ theme }) => theme["blue-500"]};
    border-bottom: 1px solid transparent;

    height: fit-content;

    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;
    text-transform: uppercase;

    gap: 0.5rem;
  }

  a:hover {
    border-bottom: 1px solid ${({ theme }) => theme["blue-500"]};
  }
`;

export const ProfileDescription = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  line-height: 160%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const ProfileItemsContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 1.5rem;

  gap: 1.5rem;

  position: absolute;
  bottom: 2rem;
`;

export const ProfileItem = styled.div`
  display: flex;

  align-items: center;

  gap: 0.5rem;
`;
