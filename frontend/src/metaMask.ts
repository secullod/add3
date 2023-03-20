import {ethers} from "ethers";

const alchemyRpcUrl = process.env.REACT_APP_ALCHEMY_RPC_URL
export const provider = new ethers.providers.Web3Provider((window as any).ethereum, 'any')
export const getConnectedAccounts = () => (window as any).ethereum.request({method: 'eth_accounts'})
export const requestAccounts = () => (window as any).ethereum.request({method: 'eth_requestAccounts'});
export const requestToConnectAccount = async () => {
    await requestToAddGoerli()
    await requestAccounts()
}
export const requestToAddGoerli = async () =>
    await (window as any).ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: '0x5',
            chainName: 'Goerli Test Network RPC',
            nativeCurrency: {
                name: 'Ether',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: [alchemyRpcUrl],
            blockExplorerUrls: ['https://goerli.etherscan.io'],
        }],
    });



