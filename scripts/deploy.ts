import { ethers } from "hardhat";

async function main() {
  const TrotelCoin = await ethers.getContractFactory("TrotelCoin");
  const trotelcoin = await TrotelCoin.deploy("Contract is deployed !");

  await trotelcoin.deployed();

  console.log("TrotelCoin deployed to:", trotelcoin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
