import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/wrappers/Layout/Layout";

import theme from "../constants/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Layout {...pageProps}>
				<Component {...pageProps} theme={theme} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
