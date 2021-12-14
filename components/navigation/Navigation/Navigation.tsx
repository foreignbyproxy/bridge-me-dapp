import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function Navigation() {
	return (
		<Flex justify="space-between" align="center" bg="black" px={2} py={2}>
			<Box>
				Bridge.me
			</Box>
		</Flex>
	);
}

export default Navigation;
