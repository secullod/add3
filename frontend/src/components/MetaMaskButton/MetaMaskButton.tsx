import {Button, Image} from "react-bootstrap";
import {requestToConnectAccount} from "../../metaMask";
import metamaskImg from "./metamask.png";
import React from "react";
import './MetaMaskButton.scss'

interface Props {
    userAddress: string
}

export const MetaMaskButton = ({userAddress}: Props) =>
    <Button onClick={requestToConnectAccount} id="metamask">
        {!userAddress
            ? <><Image src={metamaskImg} id="metamask-image" /> Connect MetaMask</>
            : <>Connected to: {userAddress}</>}
    </Button>

