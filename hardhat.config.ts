require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const config = require('./config.ts');

module.exports = {
  networks: {
    polygon: {
      url: "https://polygon-rpc-url",
      accounts: [config.privateKey]
    },
    polygonscan: {
      apiKey: [config.apiKey]
    }
  },
  solidity: "0.8.0",
};
