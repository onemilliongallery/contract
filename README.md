![](images/header.jpg)

# One Million Gallery: Contract

This repository contains the code used to build the [One Million Gallery](https://onemillion.gallery) collection. To learn more, check out our [collection on OpenSea.io](https://opensea.io/collection/onemilliongallery).

### Technology

We opted to write our contract using [Hardhat](https://hardhat.org) and Solidity, both of which are industry standard tools. The contract is well tested and was released on to the Ethereum Rinkeby testnet [[1]](https://testnets.opensea.io/collection/onemilliongallerynft) [[2]](https://testnets.opensea.io/collection/onemilliongallerynft-v2) before releasing publicly on the Ethereum mainnet [[1]](https://opensea.io/collection/onemilliongallery).

Our contract deployed on the Ethereum mainnet is [`0xa12522e426f6474e72276a64c538d1e6ffa79d6a`](https://etherscan.io/address/0xa12522e426f6474e72276a64c538d1e6ffa79d6a). 

### Philosophy

As avid NFT collectors and enthusiasts who love the Blockchain and Web3 space, we wanted to be as open and transparent about the entire process. Not only to help us collect feedback, but to share our own journey with the rest of the Web3 community, as well as for anyone interested in the collection to explore our technical design and implementation.

This is our first NFT collection and so we didn't focus too much on optimization, but we covered the gas fees associated with minting with our own money to subsidise this. This means any Canvas holders will only be responsible for gas fees associated with transferring their Canvas NFT to other wallets.

### Dev Toolkit

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
npx hardhat size-contracts
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```