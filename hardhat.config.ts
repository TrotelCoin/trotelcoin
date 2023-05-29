require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    polygon: {
      url: "https://polygon-rpc-url",
      accounts: 123456
    }
  },
  solidity: "0.8.0",
};
