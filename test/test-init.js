const { parseEther } = ethers.utils;

const getContractInstance = async (factoryName, address, args) => {
  const Factory = await ethers.getContractFactory(factoryName, address);
  const parameters = args ? args : [];
  return await Factory.deploy(...parameters);
};

module.exports = {
  getContractInstance,
};
