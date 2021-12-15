import type { Bridge } from "../types/common";

export const networks = ["Mainnet", "Polygon", "xDai", "Optimism", "Arbitrum"] as const;
export const tokens = ["USDC", "USDT", "MATIC", "DAI", "ETH", "WETH", "UMA"] as const;

export const bridges: Bridge[] = [
	{
		name: "Hop",
		slug: "hop",
		website: "https://app.hop.exchange/",
		imageUrl: "/logos/hop_logo.png",
		networks: ["Mainnet", "Polygon", "xDai", "Optimism", "Arbitrum"],
		tokens: ["USDC", "USDT", "MATIC", "DAI", "ETH"],
	},
	{
		name: "Across",
		slug: "across",
		website: "https://across.to/",
		imageUrl: "/logos/Across-About-Bullet-logox2.png",
		networks: ["Optimism", "Arbitrum", "Mainnet"],
		tokens: ["USDC", "WETH", "ETH", "UMA"],
	},
	{
		name: "Arbitrum Bridge",
		slug: "arbitrum",
		website: "https://bridge.arbitrum.io/",
		imageUrl: "/logos/arbitrum-logo.svg",
		networks: ["Arbitrum", "Mainnet"],
		tokens: "https://bridge.arbitrum.io/token-list-42161.json",
		supportsContractWallet: false,
	},
];
