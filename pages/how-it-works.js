import React from 'react';

const HowItWorks = () => (
  <div className="flex justify-center sm:px-4 p-12 min-h-screen">
    <div className="w-full minmd:w-4/5">
      <div className="mt-4">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold xs:ml-0 mt-65">How It Works?</h1>
        <div className="mt-10">
          <p className="mt-3 font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">#1: Connect your MetaMask wallet and switch to Polygon Mumbai Network</p>
          <p className="mt-3 font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">#2: Get some MATIC from <a target="_blank" href="https://faucet.polygon.technology/" rel="noreferrer">Polygon Faucet</a></p>
          <p className="mt-3 font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">#3: Create your own NFTs</p>
          <p className="mt-3 font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">#4: List your NFTs on Marketplace for sale (0.025 MATIC listing fee)</p>
          <p className="mt-3 font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">#5: Buy other NFTs on Marketplace</p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
