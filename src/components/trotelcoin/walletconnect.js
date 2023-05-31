import ethers from 'ethers';
const network = 'testnet';

function walletConnectFcn() {
  console.log('\n============================');

  // ETHERS PROVIDER
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

  // SWITCH TO BSC
  console.log('Switched.');

  // CONNECT TO ACCOUNT
  console.log('Connecting wallet...');
}

export default walletConnectFcn;
