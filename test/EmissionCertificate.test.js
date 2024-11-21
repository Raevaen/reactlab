const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EmissionCertificate", function () {
  let EmissionCertificate;
  let emissionCertificate;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    EmissionCertificate = await ethers.getContractFactory("EmissionCertificate");
    [owner, addr1, addr2, _] = await ethers.getSigners();

    // Deploy the contract
    emissionCertificate = await EmissionCertificate.deploy(owner.address);
});

describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await emissionCertificate.owner()).to.equal(owner.address);
    });

    it("Should have the correct name and symbol", async function () {
      expect(await emissionCertificate.name()).to.equal("EmissionCertificate");
      expect(await emissionCertificate.symbol()).to.equal("EMC");
    });
  });

  describe("Minting", function () {
    it("Should fail if non-owner tries to mint", async function () {
        const tokenURI = "https://example.com/token-metadata.json";
        await expect(
            emissionCertificate.connect(addr1).mintCertificate(addr1.address, tokenURI)
        ).to.be.revertedWithCustomError(emissionCertificate, "OwnableUnauthorizedAccount")
            .withArgs(addr1.address);
    });
  });

  describe("Transfers", function () {
    it("Should transfer a certificate", async function () {
      const tokenURI = "https://example.com/token-metadata.json";
      await emissionCertificate.mintCertificate(addr1.address, tokenURI);

      await emissionCertificate.connect(addr1).transferFrom(addr1.address, addr2.address, 1);

      expect(await emissionCertificate.ownerOf(1)).to.equal(addr2.address);
    });
  });
});