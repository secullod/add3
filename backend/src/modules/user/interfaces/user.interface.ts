export interface User {
  address: string;
  loginBalances: {
    loginTime: Date;
    balance: number;
  }[];
  mintedAmounts: {
    mintAmount: number;
    mintTime: Date;
    toAddress: string;
  }[];
  created: Date;
  updated: Date;
}
