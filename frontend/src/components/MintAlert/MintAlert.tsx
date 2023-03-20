import React from "react";
import './MintAlert.scss'

interface Props {
    mintAlert: boolean
    toAddress: string
}

export const MintAlert = ({mintAlert, toAddress}: Props) =>
    <div className={`mint-alert ${mintAlert ? 'on' : ''}`}>
        <div>{`Tokens minted to address ${toAddress}`}</div>
    </div>
