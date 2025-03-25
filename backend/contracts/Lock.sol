// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenSwap is Ownable {
    IERC20 public token;
    uint256 public rate = 100; // 1 ETH = 100 Tokens

    event TokensPurchased(address buyer, uint256 ethAmount, uint256 tokenAmount);

    constructor(IERC20 _token) Ownable(msg.sender) {  // Pass msg.sender to Ownable
        token = _token;
    }

    function buyTokens() public payable {
        require(msg.value > 0, "Send ETH to swap for tokens");

        uint256 tokenAmount = msg.value * rate;
        require(token.balanceOf(address(this)) >= tokenAmount, "Not enough tokens");

        token.transfer(msg.sender, tokenAmount);
        emit TokensPurchased(msg.sender, msg.value, tokenAmount);
    }

    function withdrawTokens() public onlyOwner {
        token.transfer(owner(), token.balanceOf(address(this)));
    }

    function withdrawEther() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
