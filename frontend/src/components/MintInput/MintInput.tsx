import {Button, FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import './MintInput.scss'

interface Props {
    setToAddress: (address: string) => void
    mintTransaction: () => void
}

export const MintInput = ({mintTransaction, setToAddress}: Props) =>
    <InputGroup>
        <FormControl
            placeholder="Insert User Address Here..."
            onChange={(e) => setToAddress(e.target.value)}
        />
        <Button onClick={mintTransaction}>
            Mint Tokens
        </Button>
    </InputGroup>
