require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
   networks: {
    sepolia: {
      chainId: 11155111,
      url: 'https://eth-sepolia.g.alchemy.com/v2/lQtnnsSVGsY_7HNuG-WvAOHn1xiVsqOj',
      accounts: ['b3741e62cb358ed89d2022fd2232424737164e1ed93a4dfff7d6fd265a5c7c9e'],
    },
  },
};
