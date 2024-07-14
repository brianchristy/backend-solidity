const hre = require("hardhat");

async function main() {
  const adder = await hre.ethers.deployContract("CrowdFunding");

  await adder.waitForDeployment();

  console.log("CrowdFunding deployed to:", adder.target);
}

main().catch((error) => {
  console.error(error);

  process.exitCode = 1;
});
