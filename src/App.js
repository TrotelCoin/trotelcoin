import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import MyGroup from './components/MyGroup.js';
import walletConnectFcn from './components/trotelcoin/walletConnect.js';
import './styles/App.css';
import { Button } from '@mui/material';

function App() {
  const [walletData, setWalletData] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [contractAddress, setContractAddress] = useState();

  const [connectTextSt, setConnectTextSt] = useState("Connect");
  const [connectLinkSt, setConnectLinkSt] = useState("");

  async function connectWallet() {
    if (account !== undefined) {
      setConnectTextSt('Account ${account} already connected.');
    } else {
      const wData = await walletConnectFcn();

      let newAccount = wData[0];
      let newNetwork = wData[2];
      if (newAccount !== undefined) {
        setConnectTextSt('Account ${newAccount} connected.');
        setConnectLinkSt('https://bscscan.com/address/${newAccount}');

        setWalletData(wData);
        setAccount(newAccount);
        setNetwork(newNetwork);
      }
    }
  }

  return (
    <div className="App">
      <h1 className="header">Connect your wallet</h1>
      <MyGroup fcn={connectWallet} buttonLabel={"Connect Wallet"} text={connectTextSt} link={connectLinkSt}></MyGroup>
    </div>
  );
}

export default App;
