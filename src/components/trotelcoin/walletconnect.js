import {ethers} from 'ethers';
const network = 'bsc';

async function walletConnectFcn() {
    console.log('\n============================');

    // ETHERS PROVIDER
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

    // SWITCH TO BSC
    console.log('Switching to BSC network...');
    let chaindId;
    if (network === 'bsc') {
        chaindId = 56;
    } else {
        chaindId = 1;
    }

    await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainName: 'Binance Smart Chain',
                chaindId: chaindId,
                nativeCurrency: {name: 'BNB', symbol: 'BNB', decimals: 18},
                rpcUrls: ['https://bsc-dataseed1.defibit.io'],
                blockExplorerUrls: ['https://bscscan.com/'],
            },
        ],
    });

    console.log('Switched.');

    // CONNECT TO ACCOUNT
    console.log('Connecting wallet...');
    let selectedAccount;
    await provider
        .send('eth_requestAccount', [])
        .then((accounts) => {
            selectedAccount = accounts[0];
            console.log('Selected account ${selectedAccount}');
        })
        .catch((connectError) => {
            console.log('${connectError.message.toString()}');
            return;
        });

    return [selectedAccount, provider];

}

export default walletConnectFcn;
