require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const config = require('./config.ts');

module.exports = {
  networks: {
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/" + config.infuraApiKey,
      accounts: [config.privateKey]
    },
    polygonscan: {
      url: "https://api.polygonscan.com/api",
      apiKey: [config.polygonscanApiKey]
    }
  },
  solidity: "0.8.0",
};
