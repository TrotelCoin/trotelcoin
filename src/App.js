import {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import TrotelCoin from './artifacts/contracts/TrotelCoin.sol/TrotelCoin.json';
import './App.css';

const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    getBalance();
  }, [])

  async function getBalance() {
    if(typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider;
      const contract = new ethers.Contract(tokenAddress, TrotelCoin.abi, provider);
      const balance = await contract.balanceOf(accounts[0]);
      setBalance(balance.toString() / (10 ** contract.decimals));
    }
  }

  return (
    <div className="App">
      <p>Vous avez {balance} TROTEL.</p>
    </div>
  );
}

export default App;
