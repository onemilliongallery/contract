/**
 * Built by the One Million Gallery team (onemillion.gallery)
 * 2022
 */

import { expect } from "chai";
import { ethers } from "hardhat";
import {
  OneMillionGalleryNFT,
  OneMillionGalleryNFT__factory,
} from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Owner", function () {
  let signers: SignerWithAddress[];
  // eslint-disable-next-line camelcase
  let factory: OneMillionGalleryNFT__factory;
  let instance: OneMillionGalleryNFT;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    factory = await ethers.getContractFactory("OneMillionGalleryNFT");
    instance = await factory.deploy();
  });

  it("should mark correct owner", async function () {
    const owner = signers[0];
    await instance.deployed();
    expect(await instance.owner()).to.equal(owner.address);
  });
});
