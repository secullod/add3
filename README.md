# Add3 Project

This project implements an ERC20 token minting Dapp using:

React, TypeScript, Ethers.js, MongoDB, and TypeChain<br>

The Dapp implements the below functionality:

* Connects user to the Dapp via MetaMask login.
* Prompts user to switch to Goerli chain with Alchemy RPC when logging in.
* Posts each login to the MongoDB database. A login is when a user connects a new account or switches his account.
* Mints TestTokens to a provided account upon transaction submission.
* Posts each mint transaction to the MongoDB database.
* Alerts user when a mint transaction he initiated is completed with an alert banner.
* Displays a list of all logins and mints stored in the MongoDB database.
* Maintains user login upon page refresh.

Front-end is located in `./frontend`<br>
Back-end is located in `./backend`<br>

Please add the below environment variables to your .env file inside of `./frontend`

`REACT_APP_ALCHEMY_RPC_URL`<br>
`REACT_APP_API_SERVER_URL`<br>
`REACT_APP_TEST_TOKEN_ADDRESS`

To run the project in Docker run the below command from the root folder:
```shell
docker compose up
```
This will start containers for the front-end, back-end, and api in Docker.

### Front-End View - Pre-Login
![](./images/pre-login.png)
### Front-End View - Logged In
![](./images/post-login.png)
### Front-End View - Mint Alert
![](./images/mint-alert.png)
