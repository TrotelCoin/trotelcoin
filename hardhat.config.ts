require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    polygon: {
      url: "https://polygon-rpc-url",
      accounts: 1234567
    }
  },
  solidity: "0.8.0",
};
