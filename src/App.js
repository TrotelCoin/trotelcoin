import React, {useState} from 'react';
import { Network, Alchemy } from 'alchemy-sdk';
import MyGroup from './components/MyGroup.js';
import walletConnectFcn from './components/trotelcoin/walletConnect.js';
import './styles/App.css';

const settings = {
    apiKey: "aRNqpR5QDXjb7qy9nuzeX5zWJziS8wVQ",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);

function App() {
  const [walletData, setWalletData] = useState();
  const [account, setAccount] = useState();
  // const [contractAddress, setContractAddress] = useState();

  const [connectTextSt, setConnectTextSt] = useState("");
  const [connectLinkSt, setConnectLinkSt] = useState("");

  async function connectWallet() {
    if (account !== undefined) {
      setConnectTextSt(`Account ${account} already connected.`);
    } else {
      const wData = await walletConnectFcn();

      let newAccount = wData[0];
      if (newAccount !== undefined) {
        setConnectTextSt(`Account ${newAccount} connected.`);
        setConnectLinkSt(`https://bscscan.com/address/${newAccount}`);

        setWalletData(wData);
        setAccount(newAccount);
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
