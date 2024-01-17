import styled from "styled-components";

export const SearchPostContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  margin-top: 4.5rem;

  input {
    background: ${({ theme }) => theme["base-input"]};

    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 0;

    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  input::placeholder {
    font-family: "Nunito";
    font-size: 1rem;
  }
`;

export const SearchPostHeader = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme["base-subtitle"]};

  font-family: "Nunito";
  font-size: 1.125;
  font-weight: bold;
`;

export const TotalItems = styled.div`
  color: ${({ theme }) => theme["base-span"]};

  font-family: "Nunito";
  font-size: 0.875rem;
`;
