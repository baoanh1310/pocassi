// const fs = require('fs');

// require('@nomiclabs/hardhat-waffle');

// const privateKey = fs.readFileSync('.secret').toString().trim();

// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     // mumbai: {
//     //   url: 'https://rpc-mumbai.maticvigil.com',
//     //   accounts: [privateKey],
//     // },
//     rinkeby: {
//       url: 'https://rinkeby.infura.io/v3/bed4fdcc76bb4978a9a3103ef0946f64',
//       accounts: [privateKey],
//     },
//   },
//   solidity: '0.8.4',
// };

require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: '.env' });
require('@nomiclabs/hardhat-etherscan');

const { ALCHEMY_API_KEY_URL } = process.env;

const { MUMBAI_PRIVATE_KEY } = process.env;

const { POLYGONSCAN_KEY } = process.env;

module.exports = {
  solidity: '0.8.4',
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};
