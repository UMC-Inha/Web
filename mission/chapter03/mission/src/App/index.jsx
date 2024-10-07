import Page from "../Page";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyle.js";
import Navbar from "./ui/Navbar/index.jsx";

import theme from "./theme.js";
function App() {
  return (
    <ThemeProvider theme={theme.lightTheme}>
      <GlobalStyles/>

      <Navbar/>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
