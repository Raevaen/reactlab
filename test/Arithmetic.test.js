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

});