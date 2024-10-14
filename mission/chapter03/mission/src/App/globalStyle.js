import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
///////////////////////////////////////////////////////////////// reset
  ${reset}
  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  p{
    padding: 0;
    margin: 0;
    
  }
  ///////////////////////////////////////////////////////////////// reset
  ///////////////////////////////////////////////////////////////// custom style of project
  *{
    color: ${({ theme }) => theme.color}
  }
  html, body, .body{
    height: 100%;
  }
  .body{
    display: flex;
    flex-direction: column;
  }
  main{
    flex-grow: 1;
  }

  ///////////////////////////////////////////////////////////////// custom style of project
`;

export default GlobalStyles;
