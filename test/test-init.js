// const { parseEther } = ethers.utils;

// const getContractInstance = async (factoryName, address, args) => {
//   const Factory = await ethers.getContractFactory(factoryName, address);
//   const parameters = args ? args : [];
//   return await Factory.deploy(...parameters);
// };

// const getGnosisProxyInstance = async (setup) => {
//   const gnosisSafeProxyFactoryFactory = await ethers.getContractFactory(
//     "GnosisSafeProxyFactory",
//     setup.roles.prime
//   );
//   const gnosisSafeProxyFactoryInstance =
//     await gnosisSafeProxyFactoryFactory.deploy();

//   const proxy_tx = await gnosisSafeProxyFactoryInstance
//     .connect(setup.roles.prime)
//     .createProxy(setup.gnosisSafe.address, "0x00");
//   const proxy_receit = await proxy_tx.wait();
//   const proxy_addr = proxy_receit.events.filter((data) => {
//     return data.event === PROXY_CREATION;
//   })[0].args["proxy"];
//   return await ethers.getContractAt("GnosisSafe", proxy_addr);
// };

// module.exports = {
//   getContractInstance,
// };
