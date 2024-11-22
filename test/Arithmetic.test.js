const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Arithmetic", function () {
  let Arithmetic;
  let arithmetic;

  beforeEach(async function () {
    Arithmetic = await ethers.getContractFactory("Arithmetic");
    arithmetic = await Arithmetic.deploy();
  });

  it("should add two numbers correctly", async function () {
    expect(await arithmetic.add(1, 2)).to.equal(3);
  });

  it("should subtract two numbers correctly", async function () {
    expect(await arithmetic.subtract(5, 3)).to.equal(2);
  });
  
  it("should throw an error when subtracting two numbers where a < b", async function () {
    await expect(arithmetic.subtract(2, 5)).to.be.revertedWith("a should be greater than or equal to b");
  });

  it("should multiply two numbers correctly", async function () {
    expect(await arithmetic.multiply(2, 3)).to.equal(6);
  });
});