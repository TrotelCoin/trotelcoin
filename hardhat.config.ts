require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    polygon: {
      url: "https://polygon-rpc-url", // Remplacez par l'URL RPC fournie par Polygon
      accounts: [privateKey] // Remplacez par votre clé privée du compte qui effectuera le déploiement
    }
  },
  solidity: "0.8.0",
};
