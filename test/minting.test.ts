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
import { ContractTransaction } from "ethers";

describe("Minting", function () {
  let signers: SignerWithAddress[];
  // eslint-disable-next-line camelcase
  let factory: OneMillionGalleryNFT__factory;
  let instance: OneMillionGalleryNFT;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    factory = await ethers.getContractFactory("OneMillionGalleryNFT");
    instance = await factory.deploy();
  });

  describe("Minting to address", () => {
    it("mints to owner", async function () {
      await instance.deployed();

      expect(await instance.balanceOf(signers[0].address)).to.equal(0);
      await instance.mintPhaseOne(signers[0].address);
      expect(await instance.balanceOf(signers[0].address)).to.equal(36);
    });

    it("mints to addr1", async function () {
      await instance.deployed();

      expect(await instance.balanceOf(signers[1].address)).to.equal(0);
      await instance.mintPhaseOne(signers[1].address);
      expect(await instance.balanceOf(signers[1].address)).to.equal(36);
    });

    it("mints to addr2", async function () {
      await instance.deployed();

      expect(await instance.balanceOf(signers[2].address)).to.equal(0);
      await instance.mintPhaseOne(signers[2].address);
      expect(await instance.balanceOf(signers[2].address)).to.equal(36);
    });
  });

  describe("Permissions", () => {
    it("cannot be minted by anyone other than the owner", async function () {
      await instance.deployed();

      const [owner, addr1] = signers;

      await expect(
        instance.connect(addr1).mintPhaseOne(owner.address)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("Phase 1", () => {
    let mintPhaseOne: (overrides?: any) => Promise<ContractTransaction>;

    beforeEach(() => {
      mintPhaseOne = instance.mintPhaseOne.bind(instance, signers[0].address);
    });

    it("mints in the correct order", async function () {
      await instance.deployed();
      await mintPhaseOne();

      expect(await instance.totalSupply()).to.eq(36);
    });

    it("cannot mint twice", async function () {
      await instance.deployed();
      await mintPhaseOne();

      await expect(mintPhaseOne()).to.be.revertedWith(
        "phase 1 is already minted"
      );
    });
  });

  describe("Phase 2", () => {
    let mintPhaseOne: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseTwo: (overrides?: any) => Promise<ContractTransaction>;

    beforeEach(() => {
      mintPhaseOne = instance.mintPhaseOne.bind(instance, signers[0].address);
      mintPhaseTwo = instance.mintPhaseTwo.bind(instance, signers[0].address);
    });

    it("mints in the correct order", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();

      expect(await instance.totalSupply()).to.eq(64);
    });

    it("cannot mint without phase 1", async function () {
      await instance.deployed();

      await expect(mintPhaseTwo()).to.be.revertedWith(
        "phase 1 is not yet minted"
      );
    });

    it("cannot mint twice", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();

      await expect(mintPhaseTwo()).to.be.revertedWith(
        "phase 2 is already minted"
      );
    });
  });

  describe("Phase 3", () => {
    let mintPhaseOne: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseTwo: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseThree: (overrides?: any) => Promise<ContractTransaction>;

    beforeEach(() => {
      mintPhaseOne = instance.mintPhaseOne.bind(instance, signers[0].address);
      mintPhaseTwo = instance.mintPhaseTwo.bind(instance, signers[0].address);
      mintPhaseThree = instance.mintPhaseThree.bind(
        instance,
        signers[0].address
      );
    });

    it("mints in the correct order", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();
      await mintPhaseThree();

      expect(await instance.totalSupply()).to.eq(84);
    });

    it("cannot mint without phase 1", async function () {
      await instance.deployed();

      await expect(mintPhaseThree()).to.be.revertedWith(
        "phase 1 is not yet minted"
      );
    });

    it("cannot mint without phase 2", async function () {
      await instance.deployed();
      await mintPhaseOne();

      await expect(mintPhaseThree()).to.be.revertedWith(
        "phase 2 is not yet minted"
      );
    });

    it("cannot mint twice", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();
      await mintPhaseThree();

      await expect(mintPhaseThree()).to.be.revertedWith(
        "phase 3 is already minted"
      );
    });
  });

  describe("Phase 4", () => {
    let mintPhaseOne: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseTwo: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseThree: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseFour: (overrides?: any) => Promise<ContractTransaction>;

    beforeEach(() => {
      mintPhaseOne = instance.mintPhaseOne.bind(instance, signers[0].address);
      mintPhaseTwo = instance.mintPhaseTwo.bind(instance, signers[0].address);
      mintPhaseThree = instance.mintPhaseThree.bind(
        instance,
        signers[0].address
      );
      mintPhaseFour = instance.mintPhaseFour.bind(instance, signers[0].address);
    });

    it("mints in the correct order", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();
      await mintPhaseThree();
      await mintPhaseFour();

      expect(await instance.totalSupply()).to.eq(96);
    });

    it("cannot mint without phase 1", async function () {
      await instance.deployed();

      await expect(mintPhaseFour()).to.be.revertedWith(
        "phase 1 is not yet minted"
      );
    });

    it("cannot mint without phase 2", async function () {
      await instance.deployed();
      await mintPhaseOne();

      await expect(mintPhaseFour()).to.be.revertedWith(
        "phase 2 is not yet minted"
      );
    });

    it("cannot mint without phase 3", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();

      await expect(mintPhaseFour()).to.be.revertedWith(
        "phase 3 is not yet minted"
      );
    });

    it("cannot mint twice", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();
      await mintPhaseThree();
      await mintPhaseFour();

      await expect(mintPhaseFour()).to.be.revertedWith(
        "phase 4 is already minted"
      );
    });
  });

  describe("Phase 5", () => {
    let mintPhaseOne: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseTwo: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseThree: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseFour: (overrides?: any) => Promise<ContractTransaction>;
    let mintPhaseFive: (overrides?: any) => Promise<ContractTransaction>;

    beforeEach(() => {
      mintPhaseOne = instance.mintPhaseOne.bind(instance, signers[0].address);
      mintPhaseTwo = instance.mintPhaseTwo.bind(instance, signers[0].address);
      mintPhaseThree = instance.mintPhaseThree.bind(
        instance,
        signers[0].address
      );
      mintPhaseFour = instance.mintPhaseFour.bind(instance, signers[0].address);
      mintPhaseFive = instance.mintPhaseFive.bind(instance, signers[0].address);
    });

    it("mints in the correct order", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();
      await mintPhaseThree();
      await mintPhaseFour();
      await mintPhaseFive();

      expect(await instance.totalSupply()).to.eq(97);
    });

    it("cannot mint without phase 1", async function () {
      await instance.deployed();

      await expect(mintPhaseFive()).to.be.revertedWith(
        "phase 1 is not yet minted"
      );
    });

    it("cannot mint without phase 2", async function () {
      await instance.deployed();
      await mintPhaseOne();

      await expect(mintPhaseFive()).to.be.revertedWith(
        "phase 2 is not yet minted"
      );
    });

    it("cannot mint without phase 3", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();

      await expect(mintPhaseFive()).to.be.revertedWith(
        "phase 3 is not yet minted"
      );
    });

    it("cannot mint without phase 4", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();
      await mintPhaseThree();

      await expect(mintPhaseFive()).to.be.revertedWith(
        "phase 4 is not yet minted"
      );
    });

    it("cannot mint twice", async function () {
      await instance.deployed();
      await mintPhaseOne();
      await mintPhaseTwo();
      await mintPhaseThree();
      await mintPhaseFour();
      await mintPhaseFive();

      await expect(mintPhaseFive()).to.be.revertedWith(
        "phase 5 is already minted"
      );
    });
  });
});
