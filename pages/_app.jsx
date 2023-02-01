import { createGlobalStyle } from "styled-components";
import ResponseAPIProvider from "../src/Contexts/ResponseAPI";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}


`;

function App({ Component, pageProps }) {
  return (
    <>
      <ResponseAPIProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ResponseAPIProvider>
    </>
  );
}

export default App;
