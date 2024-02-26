import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    input:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme["blue-500"]};
    }

    body {
        background: ${({ theme }) => theme["base-background"]};
        color: ${({ theme }) => theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }


    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;
