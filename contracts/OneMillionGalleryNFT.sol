// Built by the One Million Gallery team (onemillion.gallery)
// 2022

//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

import "./@rarible/royalties/contracts/impl/RoyaltiesV2Impl.sol";
import "./@rarible/royalties/contracts/LibPart.sol";
import "./@rarible/royalties/contracts/LibRoyaltiesV2.sol";

contract OneMillionGalleryNFT is ERC721URIStorage, IERC2981, Ownable, RoyaltiesV2Impl {
    // Total Supply
    uint256 public totalSupply;

    // Canvas Mappings
    // This will map a token ID with a Canvas Name.
    // For example, number 4 will equal A4.
    //
    mapping(uint256 => string) public canvasNames;

    constructor() ERC721("OneMillionGalleryNFT", "OMG") {
        // Total Supply
        totalSupply = 0;

        // Phase One: Earth
        canvasNames[1] = "A1";
        canvasNames[2] = "A2";
        canvasNames[3] = "A3";
        canvasNames[4] = "A4";
        canvasNames[5] = "A5";
        canvasNames[6] = "A6";
        canvasNames[7] = "A7";
        canvasNames[8] = "A8";
        canvasNames[9] = "A9";
        canvasNames[10] = "A10";
        canvasNames[11] = "B1";
        canvasNames[12] = "B10";
        canvasNames[13] = "C1";
        canvasNames[14] = "C10";
        canvasNames[15] = "D1";
        canvasNames[16] = "D10";
        canvasNames[17] = "E1";
        canvasNames[18] = "E10";
        canvasNames[19] = "F1";
        canvasNames[20] = "F10";
        canvasNames[21] = "G1";
        canvasNames[22] = "G10";
        canvasNames[23] = "H1";
        canvasNames[24] = "H10";
        canvasNames[25] = "I1";
        canvasNames[26] = "I10";
        canvasNames[27] = "J1";
        canvasNames[28] = "J2";
        canvasNames[29] = "J3";
        canvasNames[30] = "J4";
        canvasNames[31] = "J5";
        canvasNames[32] = "J6";
        canvasNames[33] = "J7";
        canvasNames[34] = "J8";
        canvasNames[35] = "J9";
        canvasNames[36] = "J10";

        // Phase Two: Water
        canvasNames[37] = "B2";
        canvasNames[38] = "B3";
        canvasNames[39] = "B4";
        canvasNames[40] = "B5";
        canvasNames[41] = "B6";
        canvasNames[42] = "B7";
        canvasNames[43] = "B8";
        canvasNames[44] = "B9";
        canvasNames[45] = "C2";
        canvasNames[46] = "C9";
        canvasNames[47] = "D2";
        canvasNames[48] = "D9";
        canvasNames[49] = "E2";
        canvasNames[50] = "E9";
        canvasNames[51] = "F2";
        canvasNames[52] = "F9";
        canvasNames[53] = "G2";
        canvasNames[54] = "G9";
        canvasNames[55] = "H2";
        canvasNames[56] = "H9";
        canvasNames[57] = "I2";
        canvasNames[58] = "I3";
        canvasNames[59] = "I4";
        canvasNames[60] = "I5";
        canvasNames[61] = "I6";
        canvasNames[62] = "I7";
        canvasNames[63] = "I8";
        canvasNames[64] = "I9";

        // Phase Three: Fire
        canvasNames[65] = "C3";
        canvasNames[66] = "C4";
        canvasNames[67] = "C5";
        canvasNames[68] = "C6";
        canvasNames[69] = "C7";
        canvasNames[70] = "C8";
        canvasNames[71] = "D3";
        canvasNames[72] = "D8";
        canvasNames[73] = "E3";
        canvasNames[74] = "E8";
        canvasNames[75] = "F3";
        canvasNames[76] = "F8";
        canvasNames[77] = "G3";
        canvasNames[78] = "G8";
        canvasNames[79] = "H3";
        canvasNames[80] = "H4";
        canvasNames[81] = "H5";
        canvasNames[82] = "H6";
        canvasNames[83] = "H7";
        canvasNames[84] = "H8";

        // Phase Four: Wind
        canvasNames[85] = "D4";
        canvasNames[86] = "D5";
        canvasNames[87] = "D6";
        canvasNames[88] = "D7";
        canvasNames[89] = "E4";
        canvasNames[90] = "E7";
        canvasNames[91] = "F4";
        canvasNames[92] = "F7";
        canvasNames[93] = "G4";
        canvasNames[94] = "G5";
        canvasNames[95] = "G6";
        canvasNames[96] = "G7";

        // Phase Five: Aether
        canvasNames[97] = "E5";
    }

    function mintPhaseOne(address to) public onlyOwner {
        require(!_exists(36), "phase 1 is already minted");

        for (uint tokenId = 1; tokenId <= 36; tokenId++) {
            require(!_exists(tokenId), "tokenID has already been minted");
            mint(to, tokenId);
        }
    }

    function mintPhaseTwo(address to) public onlyOwner {
        require(_exists(36), "phase 1 is not yet minted");
        require(!_exists(64), "phase 2 is already minted");

        for (uint tokenId = 37; tokenId <= 64; tokenId++) {
            require(!_exists(tokenId), "tokenID has already been minted");
            mint(to, tokenId);
        }
    }

    function mintPhaseThree(address to) public onlyOwner {
        require(_exists(36), "phase 1 is not yet minted");
        require(_exists(64), "phase 2 is not yet minted");
        require(!_exists(84), "phase 3 is already minted");

        for (uint tokenId = 65; tokenId <= 84; tokenId++) {
            require(!_exists(tokenId), "tokenID has already been minted");
            mint(to, tokenId);
        }
    }

    function mintPhaseFour(address to) public onlyOwner {
        require(_exists(36), "phase 1 is not yet minted");
        require(_exists(64), "phase 2 is not yet minted");
        require(_exists(84), "phase 3 is not yet minted");
        require(!_exists(96), "phase 4 is already minted");

        for (uint tokenId = 85; tokenId <= 96; tokenId++) {
            require(!_exists(tokenId), "tokenID has already been minted");
            mint(to, tokenId);
        }
    }

    function mintPhaseFive(address to) public onlyOwner {
        require(_exists(36), "phase 1 is not yet minted");
        require(_exists(64), "phase 2 is not yet minted");
        require(_exists(84), "phase 3 is not yet minted");
        require(_exists(96), "phase 4 is not yet minted");
        require(!_exists(97), "phase 5 is already minted");
        mint(to, 97);
    }

    // Minting

    function mint(address to, uint256 tokenId) private onlyOwner {
        require(!_exists(tokenId), "token has already been minted");
        require(tokenId >= 1, "Cannot mint less than 1");
        require(tokenId <= 97, "Cannot mint more than 97");
        totalSupply = totalSupply + 1;
        _mint(to, tokenId);
        _setRoyaltiesForToken(tokenId);
    }

    // MARK: Token URIs

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "URI query for nonexistent token");

        return string(abi.encodePacked("https://s.onemillion.gallery/metadata/", canvasNames[tokenId], ".json"));
    }

    // MARK: Royalty information (set at 2.5%)

    function royaltyInfo(uint256, uint256 _salePrice) external view override returns (address, uint256) {
        address recipient = 0xE362c15213910dcf3a7cbfC7EF9218674382CED6;

        return (recipient, (_salePrice * 25) / 1000);
    }

    function _setRoyaltiesForToken(uint _tokenId) public onlyOwner {
        address payable recipient = payable(0xE362c15213910dcf3a7cbfC7EF9218674382CED6);

        LibPart.Part[] memory _royalties = new LibPart.Part[](1);
        _royalties[0].value = 250; // 2.5%
        _royalties[0].account = recipient;
        _saveRoyalties(_tokenId, _royalties);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165) returns (bool) {
        if(interfaceId == LibRoyaltiesV2._INTERFACE_ID_ROYALTIES) {
            return true;
        }
        return super.supportsInterface(interfaceId);
    }
}
