# Web3 Token Swap

## Overview
Web3 Token Swap is a decentralized application (dApp) that allows users to swap tokens using a smart contract deployed on the blockchain. The frontend is built with React and interacts with the blockchain using ethers.js.

## Features
- Connect wallet via MetaMask
- Swap tokens using a deployed smart contract
- Display connected account details

## Tech Stack
- **Frontend**: React, ethers.js
- **Blockchain**: Solidity, Hardhat
- **Smart Contract**: ERC-20 token swap contract

## Installation
### Prerequisites
- Node.js (>= 14.x)
- MetaMask browser extension
- Hardhat (for local development)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/ansarwnt/tokenswap.git
   cd tokenswap
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add:
   ```sh
   REACT_APP_SWAP_CONTRACT_ADDRESS=<your_contract_address>
   REACT_APP_RPC_URL=<your_rpc_url>
   ```
4. Start the frontend:
   ```sh
   npm start
   ```

## Deployment
To deploy the smart contract on a testnet:
```sh
npx hardhat run scripts/deploy.js --network sepolia
```

## Usage
1. Connect your MetaMask wallet.
2. Enter the amount of tokens to swap.
3. Click the "Swap Tokens" button.
4. Confirm the transaction in MetaMask.

## License
This project is licensed under the MIT License.

