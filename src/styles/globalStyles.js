import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #3FBF3F;
    --secondary-color: #29AA29;
    --contrast-color: #2C2C2C;
    --shadow-color: #1C1C1C;
    --white: #FAFAFA;
    --gray: #C2C2C2;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
