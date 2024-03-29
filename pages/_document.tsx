import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import theme from "../constants/theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<title>Bridge.me | Find the right bridge</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
