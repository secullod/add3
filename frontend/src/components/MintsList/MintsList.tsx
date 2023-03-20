import {Col} from "react-bootstrap";
import React from "react";
import './MintsList.scss'
import {Mints} from "../../types";


interface Props {
    mints: Mints
}

export const MintsList = ({mints}: Props) =>
    <Col className="mints" lg={6}>
        <div className='mint-header'>Mints:</div>
        {[...mints].reverse().map((mint: any, index) =>
            <div className="mint" key={index}>
                <div className="address">
                    <strong>Address: </strong> {mint.toAddress}
                </div>
                <div className="amount">
                    <strong>Amount Minted: </strong>
                    {mint.mintAmount}</div>
                <div className="time">
                    <strong>Time Minted: </strong>
                    {new Date(mint.mintTime).toLocaleString()}
                </div>
            </div>)}
    </Col>
