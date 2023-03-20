import {TestToken__factory} from "./contractTypes";
import {provider} from "./metaMask";

const testTokenAddress = process.env.REACT_APP_TEST_TOKEN_ADDRESS || '';
export const getTestTokenContract = () => TestToken__factory.connect(testTokenAddress, provider)
export const getTestTokenContractWithSigner = () => TestToken__factory.connect(testTokenAddress, provider.getSigner());

