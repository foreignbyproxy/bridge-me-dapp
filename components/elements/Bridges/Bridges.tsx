import React, { useState } from "react";
import { Box, VStack, Text, Heading } from "@chakra-ui/react";

import Bridge from "../Bridge/Bridge";

import { bridges as AllBridges } from "../../../constants";

interface BridgesProps {}

function Bridges({}: BridgesProps) {
	const [bridges, setBridges] = useState(AllBridges);

	return (
		<Box>
			<Heading as="h1" mb={2}>
				Bridges
			</Heading>
			<VStack rowGap={2}>
				{!!bridges.length ? (
					bridges.map((bridge) => {
						return <Bridge key={bridge.slug} bridge={bridge} />;
					})
				) : (
					<Text alignSelf="flex-start">No Bridges</Text>
				)}
			</VStack>
		</Box>
	);
}

export default Bridges;
