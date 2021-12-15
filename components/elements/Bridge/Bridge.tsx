import React, { useState } from "react";
import { Flex, Image, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import type { Bridge } from "../../../types/common";

interface BridgeProps {
	bridge: Bridge;
}

function Bridge({ bridge }: BridgeProps) {
	return (
		<Flex
			gap={3}
			alignItems="center"
			w="full"
			border="1px"
			borderColor="gray.200"
			boxShadow="base"
			rounded="lg"
			px="3"
			py="2"
		>
			<Image h="35px" src={bridge.imageUrl} alt={`${bridge.name} logo`} />
			<Text>{bridge.name}</Text>
			<Link href={bridge.website} ml="auto" isExternal>
				Website <ExternalLinkIcon mx="2px" />
			</Link>{" "}
		</Flex>
	);
}

export default Bridge;
