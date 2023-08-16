const WETH = "0xee01c0cd76354c383b8c7b4e65ea88d00b06f36f";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "arbitrum-goerli",
  wNativeAddress: WETH,
  v3: {
    // WETH-USDT 500
    wNativeStablePoolAddress: "0x18a05774773b0886c19e3c3f6ed918869eb2aea2",
    stableIsToken0: true,
    factoryAddress: "0xDf108B932454F94FB1477dFFd94F6D2E698099ab", // PancakeV3Factory
    startBlock: 34447631, // PancakeV3Factory start block
    stableCoins: [
      "0x179522635726710dd7d2035a81d856de4aa7836c", // USDC
    ],
    whitelistAddresses: [
      WETH,
      "0x179522635726710dd7d2035a81d856de4aa7836c", // USDC
      "0xbe737d08fb505ad45e08a89ac7fda9791f025bf2", // ARB
    ],
    nonfungiblePositionManagerAddress: "0xE75A72Ca6a6b695431c8bed221866cf18E741389",
    nonfungiblePositionManagerStartBlock: 34447686,
    minETHLocked: 0,
  },
  v2: {
    factoryAddress: "0xca45b542156d06935AE19988D0d148476D7Aba12",
    startBlock: 34176637,
    wNativeStablePair0: "0xee01c0cd76354c383b8c7b4e65ea88d00b06f36f", // WETH-USDC
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [
      WETH,
      "0x179522635726710dd7d2035a81d856de4aa7836c", // USDC
      "0xbe737d08fb505ad45e08a89ac7fda9791f025bf2", // ARB
    ],
  },
};
