import React from "react";
import { Box, Container } from "@chakra-ui/react";

import Navigation from "../../navigation/Navigation/Navigation";

interface Props {
	children: React.ReactChild;
	containerWidth: string;
	containerHeight: string;
}
export default function Layout({
	children,
	containerWidth = "container.xl",
	containerHeight = "100vh",
}: Props) {
	return (
		<Box>
			<Navigation />
			<Container minH={containerHeight} maxW={containerWidth} my={4} py={4}>
				{children}
			</Container>
		</Box>
	);
}
