import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

  * {
    box-sizing: border-box;
    font-family: "NanumBarunGothic", sans-serif;
}

html {
    position : relative;
    font-size : 10px;
    min-height: 100%;
  }
  body {
    color : ${(props) => props.theme.colors.basicFont};
    font-size : 1.6rem;
  }
  
  li {
    list-style : none;
  }

  ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, hgroup, p, blockquote, figure, form, fieldset, input, legend, pre, abbr, button {
    margin: 0;
    padding: 0;
  }


  h1 a, li a  {
    text-decoration: none;
  }

  a {
    outline: none;
    color : inherit;
  }

  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    outline : none;
  }
`;

export default GlobalStyle;
