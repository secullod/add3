import {TestToken__factory} from "./contractTypes";
import {provider} from "./metaMask";

const testTokenAddress = '0x927DFb9e957526e4D40448d6D05A39ea39a2ee6B';
export const getTestTokenContract = () => TestToken__factory.connect(testTokenAddress, provider)
export const getTestTokenContractWithSigner = () => TestToken__factory.connect(testTokenAddress, provider.getSigner());

