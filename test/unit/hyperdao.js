const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");
const { utils, BigNumber } = require("ethers");

const getContractInstance = async (factoryName, address, args) => {
  const Factory = await ethers.getContractFactory(factoryName, address);
  const parameters = args ? args : [];
  return await Factory.deploy(...parameters);
};

describe("Contract: HyperDao", async () => {
  let hyperDaoFactoryFactory, hyperDaoInstance, params, safeData;
  let root, owner1, owner2, owner3;

  const CHANNEL_ID = BigNumber.from(-1001741603151);
  const USER_ID = 1001741603151;
  context("deploy new dao", () => {
    before("setup", async () => {
      const signers = await ethers.getSigners();
      [root, owner1, owner2, owner3] = signers;
      // const { root, owner1, owner2, owner3 } = await getNamedAccounts();

      // [root, owner1, owner2, owner4] = signers;

      const gnosisSafeInstance = await getContractInstance(
        "GnosisSafe",
        root.address
      );
      const gnosisSafeProxyInstance = await getContractInstance(
        "GnosisSafeProxyFactory",
        root.address
      );

      safeData = "0x";

      params = [
        CHANNEL_ID,
        safeData,
        [owner1.address, owner2.address, owner3.address],
      ];
      console.log("hereh");
      hyperDaoFactoryFactory = await ethers.getContractFactory("HyperDAO");
      hyperDaoInstance = await hyperDaoFactoryFactory.deploy(
        gnosisSafeInstance.address,
        gnosisSafeProxyInstance.address
      );
    });
    it("succeeds", async () => {
      console.log("hereh1");

      expect(
        await hyperDaoInstance.connect(root).assembleDao(...params)
      ).to.equal(true);
    });
    console.log("hereh2");
  });
});
