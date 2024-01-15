import styled from "styled-components";
import Cover from "../../assets/Cover.svg";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 18.5rem;

  background-image: url(${Cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
