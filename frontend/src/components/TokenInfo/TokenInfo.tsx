import {Card} from "react-bootstrap";
import React from "react";


interface Props {
    tokenName: string
    tokenSymbol: string
    userBalance: number
}

export const TokenInfo = ({tokenName, tokenSymbol, userBalance}: Props) =>
    <>
        <Card.Title>
            <strong>Add3 Minter</strong>
        </Card.Title>
        <Card.Text>
            Token Name: <strong>{tokenName} </strong>
        </Card.Text>
        <Card.Text>
            Token Symbol: <strong>{tokenSymbol} </strong>
        </Card.Text>
        <Card.Text>
            User Balance: <strong>{userBalance} </strong>
        </Card.Text>
    </>
