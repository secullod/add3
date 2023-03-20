import {Col} from "react-bootstrap";
import React from "react";
import './LoginsList.scss'
import {Logins} from "../../types";

interface Props {
    logins: Logins
}

export const LoginsList = ({logins}: Props) =>
<Col className="logins" lg={6}>
    <div className='login-header'>Logins:</div>
    {[...logins].reverse().map((login: any, index) =>
        <div className="login" key={index}>
            <div className="time">
                <strong>Login Time: </strong>
                {new Date(login.loginTime).toLocaleString()}
            </div>
            <div className="balance">
                <strong>Balance: </strong>
                {login.balance} ETK
            </div>
        </div>)}
</Col>
