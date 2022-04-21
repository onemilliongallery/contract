/**
 * Built by the One Million Gallery team (onemillion.gallery)
 * 2022
 */

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { address, contractAddress } from "./config";

async function main() {
  const OneMillionGalleryNFT = await ethers.getContractFactory(
    "OneMillionGalleryNFT"
  );

  const instance = OneMillionGalleryNFT.attach(contractAddress);

  await instance.mintPhaseTwo(address);

  console.log("Phase Two minted to:", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
