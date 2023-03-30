import "./App.scss";
import {Card, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Logins, Mints, User} from "./types";
import {createOrUpdateUser, getUserData, postMintToUserAccount} from "./requests";
import {getTestTokenContract, getTestTokenContractWithSigner} from "./contractInteraction";
import {checkOnGoerli, getConnectedAccounts} from "./metaMask";
import {LoginsList, MetaMaskButton, MintAlert, MintInput, MintsList, TokenInfo} from "./components";

const App = () => {
    const [userBalance, setUserBalance] = useState(0);
    const [userAddress, setUserAddress] = useState('');
    const [onGoerli, setOnGoerli] = useState(false);
    const [toAddress, setToAddress] = useState('');
    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [logins, setLogins] = useState<Logins>([]);
    const [mints, setMints] = useState<Mints>([]);
    const [mintAlert, setMintAlert] = useState<boolean>(false);

    const clearData = () => {
        setUserBalance(0)
        setUserAddress('')
        setToAddress('')
        setTokenName('')
        setTokenSymbol('')
        setLogins([])
        setMints([])
    }
    const getLogin = async () => userLogin(getUserData)
    const newLogin = async () => userLogin(postUser)
    const hideMintAlert = () => setTimeout(() => setMintAlert(false), 5000)
    const postUser = async (address: string) => {
        let testTokenContract = getTestTokenContract()
        let userBalance = await testTokenContract.balanceOf(address)
        return await createOrUpdateUser(address, userBalance.toNumber())
    }
    const userLogin = async (fn: (address: string) => Promise<User | null>) => {
        let addresses = await getConnectedAccounts()
        if (addresses.length === 0) {
            clearData()
            return
        }
        let address = addresses[0]
        let testTokenContract = getTestTokenContract()
        setOnGoerli(checkOnGoerli())
        setUserAddress(address)
        setTokenSymbol(await testTokenContract.symbol())
        setTokenName(await testTokenContract.name())
        let userBalance = await testTokenContract.balanceOf(address)
        setUserBalance(userBalance.toNumber())
        let data = await fn(address)
        if (data) {
            setLogins(data.loginBalances)
            setMints(data.mintedAmounts)
        }
    }
    const mintTransaction = async () => {
        let testTokenContract = getTestTokenContractWithSigner()
        let tx = await testTokenContract.mint(toAddress, 5)
        let receipt = await tx.wait(1)
        setMintAlert(true)
        let data = await postMintToUserAccount(userAddress, toAddress)
        if (data) setMints(data.mintedAmounts)
        hideMintAlert()
    }

    useEffect(() => {

        if (!(window as any).ethereum) return

        getLogin();

        (window as any).ethereum.on('accountsChanged', newLogin);
        (window as any).ethereum.on('connect', getLogin);
        (window as any).ethereum.on('chainChanged', newLogin);

        return () => {
            (window as any).ethereum.removeListener('accountsChanged', newLogin);
            (window as any).ethereum.removeListener('connect', getLogin);
            (window as any).ethereum.removeListener('chainChanged', newLogin);
        }
    }, []);

    return (
        <>
            <MintAlert mintAlert={mintAlert} toAddress={toAddress} />
            <Container>
                <MetaMaskButton userAddress={userAddress} onGoerli={onGoerli}/>
                <Card>
                    <Card.Body>
                        <Row>
                            <div className="mint-card">
                                <TokenInfo tokenName={tokenName} tokenSymbol={tokenSymbol} userBalance={userBalance} />
                                <MintInput setToAddress={setToAddress} mintTransaction={mintTransaction} />
                            </div>
                        </Row>
                        <Row className="backend-data">
                            <LoginsList logins={logins} />
                            <MintsList mints={mints} />
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default App;
