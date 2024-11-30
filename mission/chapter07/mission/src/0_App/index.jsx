import Page from "../1_Page";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./style/globalStyle.js";
import Navbar from "./ui/Navbar/index.jsx";
import STYLE from "./style/style.js";

import theme from "./style/theme.js";
function App() {
  return (
    <ThemeProvider theme={theme.defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
          <Navbar />
          <Page />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
