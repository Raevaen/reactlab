// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract EmissionCertificate is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    
    constructor(address _owner) ERC721("EmissionCertificate", "EMC") Ownable(_owner) {}

    function mintCertificate(address recipient, string memory tokenURI) public onlyOwner {
        _tokenIdCounter++;
        uint256 newTokenId = _tokenIdCounter;
        _mint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
    }
}