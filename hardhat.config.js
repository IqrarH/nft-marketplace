require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: './env'})
const projectId = process.env.projectId;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`
    },
  },
  solidity: "0.8.4",
};
