import {Button} from "react-bootstrap";
import {requestToConnectAccount} from "../../metaMask";
import React from "react";
import './MetaMaskButton.scss'

interface Props {
    userAddress: string
    onGoerli: boolean
}

export const MetaMaskButton = ({userAddress, onGoerli}: Props) =>
    <Button onClick={requestToConnectAccount} className={`metamask-connect ${userAddress && !onGoerli && 'goerli'}`}>
        {!userAddress
            ? <>Connect MetaMask</>
            : onGoerli
                ? <>Connected to: {userAddress}</>
                : <>Please switch to Goerli</>
        }
    </Button>

