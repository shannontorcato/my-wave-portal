require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://alpha-sly-violet.ethereum-goerli.discover.quiknode.pro/6975eada12272aed5f7691b951afe0cd38e2be8a/",
      accounts: ["556dbd635c66c5ee8c9271abbc9277bdde0b901cdbd24de09658d2fd8a229862"]
    },
  },
};
