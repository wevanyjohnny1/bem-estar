import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #fae08b;
    --yellow: #ece9de;
    
    --logo: #42b97b;
    --yellow-strong: #e4ac19;
    --yellow-medium: #e5ca3d;

    --green-light: #e2f1e4;
    --orange-light: #f8c894;

    --error: #c53030;

    --text-black: #343436;
    --text-light: #666260;

    --shape: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(---text-title)
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;