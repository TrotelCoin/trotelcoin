import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import MyGroup from '../components/mygroup.js';
import walletConnectFunction from '../components/trotelcoin/walletConnect.js';
import './styles/App.css';
import { Button } from '@mui/material';

function App() {
  const [walletData, setWalletData] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [contractAddress, setContractAddress] = useState();

  return (
    <div className="App">
      <p>Vous avez {balance} TROTEL.</p>
    </div>
  );
}

export default App;
