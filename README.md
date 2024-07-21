# CrowdFunding Smart Contract

This repository contains the smart contract code for a decentralized crowdfunding platform built on the Ethereum blockchain.

## Overview

The `CrowdFunding` contract allows users to create and manage crowdfunding campaigns. Each campaign has a target amount to be collected, and donors can contribute to campaigns they wish to support. The contract ensures transparency, security, and decentralization, leveraging the benefits of blockchain technology.

## Features

- Create new crowdfunding campaigns with a title, description, target amount, and image.
- Donate to campaigns.
- Track the amount collected and the list of donors for each campaign.
- Retrieve details of all campaigns.

## Contract Details

The `CrowdFunding` contract is written in Solidity and compiled with version 0.8.9. It consists of the following main components:

### Structs

- `Campaign`: Stores details of a campaign including owner, title, description, target amount, amount collected, image, list of donors, and donations.

### Mappings

- `campaigns`: Maps a campaign ID to a `Campaign` struct.

### State Variables

- `numberOfCampaigns`: Keeps track of the total number of campaigns created.

### Functions

- `createCampaign`: Creates a new campaign.
- `donateToCampaign`: Allows users to donate to a specified campaign.
- `getDonators`: Returns the list of donors and their donation amounts for a specified campaign.
- `getCampaigns`: Returns an array of all campaigns.

## Prerequisites

To deploy and interact with this contract, you'll need:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Remix IDE](https://remix.ethereum.org/) or [Hardhat](https://hardhat.org/)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/crowdfunding.git
cd crowdfunding
```

2. Install dependencies:

```bash
npm install
```

### Deploying the Contract

1. Open the project in [Remix IDE](https://remix.ethereum.org/).
2. Compile the `CrowdFunding.sol` contract.
3. Deploy the contract to your preferred Ethereum network (e.g., Ropsten, Rinkeby, or local blockchain).

### Interacting with the Contract

You can interact with the contract using a frontend framework like Next.js with `ethers.js` or `web3.js`. Below is an example of how to call contract functions using `ethers.js` in a Next.js application.

#### Example in JavaScript (Using ethers.js)

1. Install `ethers.js`:

```bash
npm install ethers
```

2. Initialize the contract in your Next.js component:

```js
import { ethers } from 'ethers';
import contractABI from './path_to_your_ABI.json'; // Ensure you have the ABI JSON file
import contractAddress from './path_to_your_contract_address.json'; // Ensure you have the contract address JSON file

const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send('eth_requestAccounts', []); // Request account access if needed
const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, contractABI, signer);
```

3. Call contract functions:

```js
async function donateToCampaign(campaignId, amount) {
  const weiAmount = ethers.utils.parseEther(amount); // Convert ETH to WEI
  await contract.donateToCampaign(campaignId, { value: weiAmount });
}

// Example usage:
donateToCampaign(0, '0.1'); // Donate 0.1 ETH to campaign with ID 0
```

## License

This project is licensed under the MIT License.

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- Solidity
- Ethereum
- Remix IDE
- Ethers.js
- Next.js
