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

describe("Mappings", function () {
  const mappings: any = {
    1: "A1",
    2: "A2",
    3: "A3",
    4: "A4",
    5: "A5",
    6: "A6",
    7: "A7",
    8: "A8",
    9: "A9",
    10: "A10",
    11: "B1",
    12: "B10",
    13: "C1",
    14: "C10",
    15: "D1",
    16: "D10",
    17: "E1",
    18: "E10",
    19: "F1",
    20: "F10",
    21: "G1",
    22: "G10",
    23: "H1",
    24: "H10",
    25: "I1",
    26: "I10",
    27: "J1",
    28: "J2",
    29: "J3",
    30: "J4",
    31: "J5",
    32: "J6",
    33: "J7",
    34: "J8",
    35: "J9",
    36: "J10",
    37: "B2",
    38: "B3",
    39: "B4",
    40: "B5",
    41: "B6",
    42: "B7",
    43: "B8",
    44: "B9",
    45: "C2",
    46: "C9",
    47: "D2",
    48: "D9",
    49: "E2",
    50: "E9",
    51: "F2",
    52: "F9",
    53: "G2",
    54: "G9",
    55: "H2",
    56: "H9",
    57: "I2",
    58: "I3",
    59: "I4",
    60: "I5",
    61: "I6",
    62: "I7",
    63: "I8",
    64: "I9",
    65: "C3",
    66: "C4",
    67: "C5",
    68: "C6",
    69: "C7",
    70: "C8",
    71: "D3",
    72: "D8",
    73: "E3",
    74: "E8",
    75: "F3",
    76: "F8",
    77: "G3",
    78: "G8",
    79: "H3",
    80: "H4",
    81: "H5",
    82: "H6",
    83: "H7",
    84: "H8",
    85: "D4",
    86: "D5",
    87: "D6",
    88: "D7",
    89: "E4",
    90: "E7",
    91: "F4",
    92: "F7",
    93: "G4",
    94: "G5",
    95: "G6",
    96: "G7",
    97: "E5",
  };

  let signers: SignerWithAddress[];
  // eslint-disable-next-line camelcase
  let factory: OneMillionGalleryNFT__factory;
  let instance: OneMillionGalleryNFT;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    factory = await ethers.getContractFactory("OneMillionGalleryNFT");
    instance = await factory.deploy();
  });

  it("should have the correct minting order", async function () {
    await instance.deployed();

    const owner = signers[0].address;

    // @ts-ignore
    expect(await instance.mintPhaseOne(owner)).to.emit(instance, "Transfer");

    for (let tokenId = 1; tokenId <= 36; tokenId++) {
      const canvasName = mappings[tokenId];

      expect(await instance.tokenURI(tokenId)).to.eql(
        `https://s.onemillion.gallery/metadata/${canvasName}.json`
      );
    }

    // @ts-ignore
    expect(await instance.mintPhaseTwo(owner)).to.emit(instance, "Transfer");

    for (let tokenId = 37; tokenId <= 64; tokenId++) {
      const canvasName = mappings[tokenId];

      expect(await instance.tokenURI(tokenId)).to.eql(
        `https://s.onemillion.gallery/metadata/${canvasName}.json`
      );
    }

    // @ts-ignore
    expect(await instance.mintPhaseThree(owner)).to.emit(instance, "Transfer");

    for (let tokenId = 65; tokenId <= 84; tokenId++) {
      const canvasName = mappings[tokenId];

      expect(await instance.tokenURI(tokenId)).to.eql(
        `https://s.onemillion.gallery/metadata/${canvasName}.json`
      );
    }

    // @ts-ignore
    expect(await instance.mintPhaseFour(owner)).to.emit(instance, "Transfer");

    for (let tokenId = 85; tokenId <= 96; tokenId++) {
      const canvasName = mappings[tokenId];

      expect(await instance.tokenURI(tokenId)).to.eql(
        `https://s.onemillion.gallery/metadata/${canvasName}.json`
      );
    }

    // @ts-ignore
    expect(await instance.mintPhaseFive(owner)).to.emit(instance, "Transfer");

    for (let tokenId = 97; tokenId <= 97; tokenId++) {
      const canvasName = mappings[tokenId];

      expect(await instance.tokenURI(tokenId)).to.eql(
        `https://s.onemillion.gallery/metadata/${canvasName}.json`
      );
    }
  });
});
