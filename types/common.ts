import { networks, tokens } from "../constants";

export interface Bridge {
	name: string;
	slug: string;
	website: string;
	imageUrl: string;
	networks: typeof networks[number][];
	tokens: string | typeof tokens[number][];
	supportsContractWallet?: boolean;
}
