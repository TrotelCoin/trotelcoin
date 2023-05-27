pragma solidity ^0.8.0;

contract TrotelCoin {
    string public name = "TrotelCoin";
    string public symbol = "TROTEL";
    uint256 public totalSupply = 10000;
    uint8 public decimals = 2;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event Burn(address indexed _from, uint256 _value);

    constructor() {
        balanceOf[msg.sender] = totalSupply;
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

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return ;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance")
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return ;
    }
}