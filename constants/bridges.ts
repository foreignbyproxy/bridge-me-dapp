export const bridges = [
	{
		name: "Hop",
		slug: "hop",
		url: "https://app.hop.exchange/",
		networks: ["Mainnet", "Polygon", "xDai", "Optimism", "Arbitrum"],
		tokens: ["USDC", "USDT", "MATIC", "DAI", "ETH"],
	},
	{
		name: "Across",
		slug: "across",
		url: "https://across.to/",
		networks: ["Optimism", "Arbitrum", "Mainnet"],
		tokens: ["USDC", "WETH", "ETH", "UMA"],
	},
	{
		name: "Arbitrum Bridge",
		slug: "arbitrum",
		url: "https://bridge.arbitrum.io/",
		networks: ["Arbitrum", "Mainnet"],
		tokens: "https://bridge.arbitrum.io/token-list-42161.json",
		supportsContractWallet: false,
	},
];
