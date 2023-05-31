require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const config = require('./config.ts');

module.exports = {
  networks: {
    bsc: {
      url: "https://bsc-dataseed1.defibit.io",
      accounts: [config.privateKey],
      chainId: 56
    },
    bscscan: {
      url: "https://api.bscscan.com/api",
      apiKey: [config.bscscanApiKey]
    }
  },
  solidity: "0.8.0",
};
