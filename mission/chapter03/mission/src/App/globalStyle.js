import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset}
  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  header, main, aside{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
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
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  
`;

export default GlobalStyles;
