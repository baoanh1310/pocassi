/* eslint-disable no-use-before-define */
/* eslint-disable no-promise-executor-return */
const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
require('@nomiclabs/hardhat-etherscan');

async function main() {
  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so NFTMarketplace here is a factory for instances of our NFTMarketplace contract.
 */
  const nftMarketplace = await ethers.getContractFactory('NFTMarketplace');
  // deploy the contract
  const deployedNFTMarketplaceContract = await nftMarketplace.deploy();

  await deployedNFTMarketplaceContract.deployed();

  // print the address of the deployed contract
  console.log(
    'Verify Contract Address:',
    deployedNFTMarketplaceContract.address,
  );

  console.log('Sleeping.....');
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run('verify:verify', {
    address: deployedNFTMarketplaceContract.address,
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
