import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globals";

import { darkTheme, defaultTheme } from "../styles/themes";

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

type Theme = keyof typeof themes;
const keysOfThemes = Object.keys(themes) as Theme[];

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>("default");

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={themes[theme]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
