// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "remix_tests.sol";
import "./TrotelCoin.sol";

contract TrotelCoinTest {
    TrotelCoin public trotelCoin;

    function beforeAll() public {
        trotelCoin = new TrotelCoin();
    }

    function checkInitialSupply() public {
        Assert.equal(trotelCoin.totalSupply(), 10000, "Total supply should be 10000");
        Assert.equal(trotelCoin.balanceOf(address(this)), 10000, "Contract should have initial balance");
    }

    function checkTransfer() public {
        address recipient = address(0x1234567890123456789012345678901234567890);
        uint256 amount = 100;

        trotelCoin.transfer(recipient, amount);

        Assert.equal(trotelCoin.balanceOf(address(this)), 9900, "Sender balance should decrease");
        Assert.equal(trotelCoin.balanceOf(recipient), amount, "Recipient balance should increase");
    }

    function checkAllowanceAndTransferFrom() public {
        address owner = address(0x0987654321098765432109876543210987654321);
        address spender = address(0x9876543210987654321098765432109876543210);
        address recipient = address(0x1234567890123456789012345678901234567890);
        uint256 amount = 100;

        trotelCoin.approve(spender, amount);

        Assert.equal(trotelCoin.allowance(owner, spender), amount, "Allowance should be set");

        trotelCoin.transferFrom(owner, recipient, amount);

        Assert.equal(trotelCoin.balanceOf(owner), 9900, "Owner balance should decrease");
        Assert.equal(trotelCoin.balanceOf(recipient), amount, "Recipient balance should increase");
        Assert.equal(trotelCoin.allowance(owner, spender), 0, "Allowance should be decreased to 0");
    }

    function checkBurn() public {
        uint256 amount = 100;

        trotelCoin.burn(amount);

        Assert.equal(trotelCoin.balanceOf(address(this)), 9800, "Contract balance should decrease");
        Assert.equal(trotelCoin.totalSupply(), 9900, "Total supply should decrease");
    }

    function runAllTests() public {
        beforeAll();
        checkInitialSupply();
        checkTransfer();
        checkAllowanceAndTransferFrom();
        checkBurn();
    }
}
