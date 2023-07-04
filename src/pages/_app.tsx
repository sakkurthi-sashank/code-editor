import { AppProps } from "next/app";
import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: "dark",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
