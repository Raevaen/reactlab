import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const EmissionCertificate = await ethers.getContractFactory("EmissionCertificate");
  const emissionCertificate = await EmissionCertificate.deploy(deployer.address);

  await emissionCertificate.deployed();

  console.log("EmissionCertificate deployed to:", emissionCertificate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });