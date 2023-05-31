import {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import TrotelCoin from './artifacts/contracts/TrotelCoin.sol';
import './App.css';

const tokenAddress = "0xf04ab1a43cBA1474160B7B8409387853D7Be02d5";

function App() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    getBalance();
  }, [])

  async function getBalance() {
    if(typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider();
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
