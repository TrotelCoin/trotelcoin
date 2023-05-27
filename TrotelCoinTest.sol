pragma solidity ^0.8.0;

import "remix_tests.sol";

contract TrotelCoinTest {
    import "TrotelCoin.sol";

    function beforeAll() public {
        
    }

    function checkInitialSupply() public {
        
        Assert.equal(totalSupply(), 10000, "Total supply should be 10000");
    }

    function checkTransfer() public {
        
    }

    function runAllTests() public {
        beforeAll();
        checkInitialSupply();
        checkTransfer();
    }
}
