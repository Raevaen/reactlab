// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EcoCreditToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("EcoCreditToken", "RTK") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    function mintReward(address recipient, uint256 amount) external {
        _mint(recipient, amount);
    }
}