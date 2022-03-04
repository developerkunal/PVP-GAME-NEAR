PVP GAME ON NEAR
==========

Sign in with NEAR and add play pvp game! Get Your Own Hero And Fight to Other Players. Hero's are random generated so its more like luck based game but don't worry there is not single value that matters there is more like Normal damage,critical damage, health ,etc 


Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you have Node.js ≥ 12 installed (https://nodejs.org), then use it to install [yarn]: `npm install --global yarn` (or just `npm i -g yarn`)
2. Run the local development server: `yarn && yarn build` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet! Running `yarn build` will tell you the URL you can visit in your browser to see the app.

3. Run ./scripts/1.dev-deploy.sh you will get a dev-contract-number id now export the contract as variable.
4. export CONTRACT=dev-contract-number
5. There is a file to get to know the test cases how we can play its right now only CLI based but soon gonna be on WEBAPP.

Deploy
Every smart contract in NEAR has its own associated account. When you run yarn dev, your smart contracts get deployed to the live NEAR TestNet with a throwaway account. When you're ready to make it permanent, here's how.

Step 0: Install near-cli
You need near-cli installed globally. Here's how:

npm install --global near-cli
This will give you the near CLI tool. Ensure that it's installed with:

near --version
Step 1: Create an account for the contract
Visit NEAR Wallet and make a new account. You'll be deploying these smart contracts to this new account.

Now authorize NEAR CLI for this new account, and follow the instructions it gives you:

near login
Step 2: set contract name.

export  CONTRACT_NAME ='your-account-here!'



