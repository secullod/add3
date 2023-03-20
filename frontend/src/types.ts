export type Logins = { loginTime: Date, balance: number }[]
export type Mints = {mintAmount: number, mintTime: Date, toAddress: string}[]


export interface User {
    address: string;
    loginBalances: Logins
    mintedAmounts: Mints
    created: Date;
    updated: Date;
}
