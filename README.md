# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project uses [Hard hat](https://hardhat.org/hardhat-runner/docs/getting-started).

install hardhat

## init
npx hardhat init

## dev
npm install --save-dev hardhat
npm install --save-dev @nomicfoundation/hardhat-ignition-ethers
npm install --save-dev @nomicfoundation/hardhat-toolbox

to run a node on your local network
npx hardhat node 

## compile
npx hardhat compile

## test
require folder ./test
npx hardhat test

## deploy 
npx hardhat node

- Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

new terminal
npx hardhat ignition deploy ignition/modules/[name].[ts|js] --network localhost

## verify/debug
npx hardhat ignition visualize ./ignition/modules/Apollo.js

## guide to migrate from truffle to hardhat
create ignition/module
remove build/
remove migrations/
remove truffle.config.js
install hardhat and its plugins
