import "../public/index.css";
import {ThemeProvider} from "styled-components"

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider theme="light">

    <Component {...pageProps} />
    // </ThemeProvider>
    )
}

export default MyApp
