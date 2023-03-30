import {ethers} from "ethers";
export const provider = new ethers.providers.Web3Provider((window as any).ethereum, 'any')

export const getConnectedAccounts = () => (window as any).ethereum.request({method: 'eth_accounts'})

export const requestAccounts = () => (window as any).ethereum.request({method: 'eth_requestAccounts'});

export const checkOnGoerli = (): boolean => (window as any).ethereum.networkVersion === '5';

export const requestToConnectAccount = async () => {
    await requestToChangeGoerli()
    await requestAccounts()
}

export const requestToChangeGoerli = async ()  =>
    await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
    });
