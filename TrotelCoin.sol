pragma solidity ^0.8.0;

contract TrotelCoin {
    string public name = "TrotelCoin";
    string public symbol = "TROTEL";
    uint256 public totalSupply;
    uint8 public decimals;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event Burn(address indexed _from, uint256 _value);

    constructor(uint256 _totalSupply, uint8 _decimals) {
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = _totalSupply;
        decimals = _decimals;
    }

    function name() public view returns (string) {
        return name;
    }
    function symbol() public view returns (string) {
        return symbol;
    }
    function decimals() public view returns (uint8) {
        return decimals;
    }
    function totalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        _transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}